const {  prepareGetRequest, preparePostRequest } = require("../../services/request/index");
const { clientInfo, url } = require("../../env/index")

const apiKey = clientInfo.env.api_key
const summonerName = clientInfo.summoners.nick2

/**
 * Makes an HTTP GET request to the League of Legends API to retrieve data about a specific summoner based on their summoner name.
 * @async
 * @function getData
 * @param {string} summonerName - The name of the summoner to retrieve data about.
 * @param {string} apiKey - The API key for the League of Legends API.
 * @returns {Promise} A Promise that resolves to the response object returned by the API.
 */

const getData = async () => {
  let path = `${url.riot}/lol/summoner/v4/summoners/by-name/${encodeURI(summonerName)}?api_key=${apiKey}`
  const resp = await prepareGetRequest(path)
  return resp
}

/**
 * Makes an HTTP GET request to the League of Legends API to retrieve information
 * about a specific summoner's game.
 * @async
 * @function getInfoGame
 * @param {Object} info - The information about the summoner, which should include their summoner ID.
 * @param {string} info.data.id - The summoner ID of the summoner to retrieve game information about.
 * @param {string} apiKey - The API key for the League of Legends API.
 * @returns {Promise} A Promise that resolves to the response object returned by the API.
 */

const getInfoGame = async (info) => {
  path = `${url.riot}/lol/league/v4/entries/by-summoner/${info.data.id}?api_key=${apiKey}`
  const resp = await prepareGetRequest(path)
  return resp
}

/** 
 * Parses the data retrieved from the League of Legends API to display summoner game information.
 * @function parseInfoGame
 * @param {Array} data - An array containing the game information of a summoner, retrieved from the League of Legends API.
 * @returns {string} A string containing the summoner's in-game name, rank, division, and LP, or a message indicating that there is no summoner data.
 */

const parseInfoGame = (data) => {
  console.log(data);
  if(data[0] == undefined){
    content = 'no sumoner data'
    return content
  } else {
    let content = `nombre de invocador: ${data[0].summonerName} division: ${data[0].tier} rango: ${data[0].rank} LP: ${data[0].leaguePoints}`
    return content
  }
}

module.exports = {
  getData,
  getInfoGame,
  parseInfoGame
}