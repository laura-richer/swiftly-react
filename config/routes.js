// eslint-disable-next-line no-multi-assign
const routes = module.exports = require('next-routes')();

routes.add({ name: 'index', pattern: '/' });
routes.add({ name: 'callback', pattern: '/callback?code=:code' });
