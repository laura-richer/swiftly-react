import queryString from 'query-string';
import { API_URL, SITE_URL } from '../config/urls';

const fetchJSON = (method, url, body) => fetch(url, {
  body,
  method,
  headers: { 'Content-Type': 'application/json' },
}).then((response) => {
  if (!response.ok) throw response;
  return response.json();
}).catch(console.error);

export const get = (url) => {
  return fetchJSON('GET', url);
};

export const post = (path, options) => {
  const body = JSON.stringify(options);
  return fetchJSON('POST', path, body);
};

export default { get, post };
