import React from 'react';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import PersonIcon from '@material-ui/icons/Person';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';

function PlayersList(props){
  const {players, teamPlayers, setTeamPlayers, closeForm, idx} = props

  const updateTeam = (newPlayer, idx) => {
    const updatedTeam = teamPlayers.map((player, i) => {
      console.log(idx, i)
      return idx === i ? {...newPlayer} : player
    })
      setTeamPlayers(updatedTeam);
      console.log(updatedTeam)
  }

  function handleClick(player, i){
      updateTeam(player, i)
    closeForm();
  }
  
  return (
    <div>
      <List>
        {players.map((player) => (
          <React.Fragment key={player.player_id}>
            <ListItem 
              button
              onClick={() => handleClick(player, idx)}
            >
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              {player.player_name}
            </ListItem>
            <Divider />
          </React.Fragment>
        ))
        }
      </List>
    </div>
  )
}

export default PlayersList;