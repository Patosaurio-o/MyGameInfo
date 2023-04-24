const axios = require("axios");

/** 
 * Prepares a GET request using axios.
 * @async
 * @function
 * @param {string} path - The endpoint to GET from.
 * @returns {Promise} - A promise that resolves with the response object.
*/

const prepareGetRequest = async (path) => {
  const resp = await axios({
    method: 'GET',
    url: path
  });
  return resp
}

/**
 * Prepares a POST request using axios. 
 * @async
 * @function
 * @param {string} path - The endpoint to POST to.
 * @param {Object} data - The data to be sent with the POST request.
 * @param {Object} headers - The headers object to be included with the request.\n * @return {Promise} - A promise that resolves with the response object.
*/

const preparePostRequest = async (path, data, headers) => {
  const resp = await axios({
    method: 'POST',
    url: path,
    data: data,
    headers : { 
      headers
    }
  });
  return resp
}

module.exports = {
  prepareGetRequest,
  preparePostRequest
}