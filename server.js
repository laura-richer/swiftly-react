const { join } = require('path');
const { parse } = require('url');
const compression = require('compression');
const express = require('express');
const helmet = require('helmet');
const next = require('next');
const routes = require('./config/routes');


// Configure environment and NextJS
const env = process.env.NODE_ENV || 'development';
const port = parseInt(process.env.PORT, 10) || 3000;
const app = next({ dev: env === 'development' });
const handle = routes.getRequestHandler(app);

// Prepare and launch app
app.prepare().then(() => {
  // Initialise Express
  const server = express();
  server.use(compression());

  // Configure headers
  server.use(helmet.noSniff());
  server.use(helmet.ieNoOpen());
  server.use(helmet.xssFilter());
  server.use(helmet.hidePoweredBy());
  server.use(helmet.hsts({ maxAge: 31536000 }));
  server.use(helmet.permittedCrossDomainPolicies());
  server.use(helmet.frameguard({ action: 'sameorigin' }));
  server.use(helmet.referrerPolicy({ policy: 'no-referrer' }));

  // Handle routes
  server.get('*', (req, res) => {
    const parsedURL = parse(req.url, true);
    const { pathname } = parsedURL;

    // Serve service worker or handle route
    if (env !== 'development' && pathname === '/service-worker.js') {
      const filePath = join(__dirname, '.next', pathname);
      app.serveStatic(req, res, filePath);
    } else {
      handle(req, res, parsedURL);
    }
  });

  // Launch app
  server.listen(port, (err) => {
    if (err) throw err;
    console.info(`> Ready on port ${port}`);
  });
});
