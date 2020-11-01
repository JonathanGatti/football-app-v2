import axios from 'axios';
import config from '../config';

const url = 'https://api-football-v1.p.rapidapi.com/v2/players/search/';

async function getData(name){
  try {
    let res = await axios.get(`${url}${name}`, {
      "headers": {
        "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
        "x-rapidapi-key": config.api_key,
        "useQueryString": true
      }
  })
    return res.data.api.players 
    }
  catch(e){
    console.log(e);
  }
}

export {getData};