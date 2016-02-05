import fetch from 'isomorphic-fetch';
import User from './resources/User';
import { resource, collection } from './helpers/annotations';
import { users as usersEndpoints } from './helpers/endpoints';

/**
 * Check the http response status code to resolve or reject the promise
 * @param response
 * @returns {*}
 */
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Parse the JSON response
 * @param response
 * @returns {Promise}
 */
function parseJSON(response) {
  return response.json();
}

/**
 * Prepare the complete URL
 *
 * @param route {String}
 * @returns {String}
 */
function prepareUrl(route) {
  return `https://api.github.com${ route }`;
}

/**
 * The resource class containing the common concepts and features required by a resource
 */
export default class ApiClient {
  constructor({ accessToken, username, password }) {
    if (accessToken) {
      this.accessToken = accessToken;
    } else if (username && password) {
      this.username = username;
      this.password = password;
    }
  }

  /**
   * Fetch the data
   *
   * @param url {String}
   * @param options {Object}
   * @returns {Promise}
   */
  fetch(url, options = {}) {
    options.headers = options.headers || {};
    options.headers.Accept = 'application/json';

    if (this.accessToken) {
      options.headers.Authorization = `Token ${ this.accessToken }`;
    }

    return fetch(prepareUrl(url), options)
      .then(checkStatus)
      .then(parseJSON);
  }

  /**
   * Get the current user
   *
   * @returns {Promise}
   */
  @resource(User)
  me() {
    return this.fetch(usersEndpoints.me);
  }

  @collection(User)
  users() {
    return this.fetch(usersEndpoints.listAll);
  }
}
