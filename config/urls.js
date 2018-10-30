const apiPrefix = process.env.API_PREFIX || 'develop';
const url = process.env.URL || 'develop';
const API_URL = `http://api.${apiPrefix}.xbox-interactive.com`;

let SITE_URL;

if (apiPrefix !== 'develop') {
  SITE_URL = 'https://xbox-interactive.com';
} else {
  SITE_URL = `https://${url}.xbox-interactive.com`;
}

export { API_URL, SITE_URL };
