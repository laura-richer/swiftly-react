module.exports = {
  apps: [
    {
      name: 'Xbox Interactive',
      script: './server.js',
      env_staging: {
        PORT: 3010,
        NODE_ENV: 'production',
      },
      env_production: {
        PORT: 3011,
        NODE_ENV: 'production',
      },
    },
  ],
};
