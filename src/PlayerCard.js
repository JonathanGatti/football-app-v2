import React, { useEffect } from 'react';
import './styles/PlayerCardStyles.css';

import axios from 'axios';
import config from './config';


function PlayerCard(props){
  const {player} = props;
  const url = `https://api-football-v1.p.rapidapi.com/v2/players/player/${player.player_id}`
  
  useEffect(() => {
    async function getData(url){
      try {
        let res = await axios.get(`${url}`, {
          "headers": {
            "x-rapidapi-key": config.api_key,
            "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
            "useQueryString": true
          }
      })
        console.log(res) 
        }
      catch(e){
        console.log(e);
      }
    }
    getData();
  }, [])

  return (
    <div className='player-container'>
      <div className='player-name'>
        <p>{player.player_name}</p>
      </div>
      <div>
        <p>{player.position}</p>
      </div> 
    </div>
  )
}

export default PlayerCard;