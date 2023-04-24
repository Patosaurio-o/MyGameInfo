const {  prepareGetRequest, preparePostRequest } = require("../../services/request/index");
const { url } = require('../../env/index')

/**
 * Sends a message in JSON format to a webhook via axios post.
 * @async
 * @function sendMessage
 * @param {Object|string} content - The content of the message to be sent. Can be either an object containing the message data or a stringified JSON.
 * @returns {Promise} A Promise that resolves to the response object returned by the API.
 * @throws {Error} Will throw an error if there is an issue with the axios post request.
 */

const sendMessage = async (content) =>{
  const headers = {
    'Content-Type': 'application/json',
  };
  const data = {
    content: JSON.stringify(content) 
  }
  let resp = await preparePostRequest(
    url.webhook,
    data,
    headers 
  )
  return resp
}

module.exports = {
  sendMessage
}