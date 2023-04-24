const clientInfo = {
  "summoners": {
    "nick1" : "patosaurio",
    "nick2" : "Pato en 3sh"
  },
  "env":{
    "api_key": "RGAPI-1146d0f8-46f1-4360-b0c6-7ae93c931115",
    "region": "la2"
  }
}

const webhookInfo = { 
  "type": 1, 
  "id": "1095850936213176330", 
  "name": "bot perKING", 
  "avatar": "../img/poloqlo1.jpg", 
  "channel_id": "562857094366363649", 
  "guild_id": "540750997480538172", 
  "application_id": null, 
  "token": "aOy6aV18iaVJVLm-yX8q7HmS9Shsk2B96673AntaLONaAh0niW64oxrtpiP_sxxkUsBQ" 
}

const url = {
  "riot": `https://${clientInfo.env.region}.api.riotgames.com`,
  "webhook": `https://discord.com/api/webhooks/${webhookInfo.id}/${webhookInfo.token}`
}

module.exports = {
  clientInfo,
  url,
  webhookInfo
}