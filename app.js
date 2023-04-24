const { getData, getInfoGame, parseInfoGame } = require("./controllers/sessions/index")
const { sendMessage } = require('./webhook/index')

try  {
  const info = async () => {
    let resp = await getData()
    let infoGame = await getInfoGame(resp)
    let content = parseInfoGame(infoGame.data)
    console.log(content);
    let sendData = await sendMessage(content)
  }

  let resp = info()
  //const { gameStartTime, gameMode, participants } = infoGame.data;
  //console.log(`La partida ${gameMode} comenzó a las ${new Date(gameStartTime)}`);
  //console.log("Los participantes son:");
  //.forEach(data => console.log(`${data.summonerName} - ${data.chamdataionId} (${data.summonerId})`)); 

} catch (error) {
  console.error(error)
}


