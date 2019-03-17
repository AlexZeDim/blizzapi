import axios from 'axios';
import { Uri, HttpMethod } from '../../types';
import { uri as validateUri } from '../validators';

/**
 * Performs basic fetch request from given uri
 * @function
 * @param {string} uri Fetch request uri
 * @param {string} method HTTP method to be used. Defaults to 'GET'
 * @param {Headers} headers HTTP request headers
 * @param {URLSearchParams} params HTTP request body parameters
 * @returns {object} Data returned by requested uri
 */
/* istanbul ignore next */
export default async (
  uri: Uri,
  method: HttpMethod = 'GET',
  headers?: Headers,
  params?: URLSearchParams,
) => {
  try {
    // tslint:disable-next-line no-if-statement
    if (!validateUri(uri)) {
      throw new RangeError(`'${uri}' is not a valid parameter for fetchFromUri()`);
    }
    const requestOptions = {
      method,
    };

    /* tslint:disable no-if-statement no-expression-statement */
    if (headers) Object.assign(requestOptions, { headers });

    // GET request method cannot have body, so I'm doing this
    if (method === 'POST') Object.assign(requestOptions, { body: params });
    /* tslint:enable no-if-statement */

    const response = await axios.get(uri, requestOptions);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
