import React, { useContext } from 'react';

import { CreateTeamContext } from './contexts/CreateTeamContexts';
import { FormContext } from './contexts/FormContext';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import PersonIcon from '@material-ui/icons/Person';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';

function PlayersList(props){
  const {players, teamPlayers, setTeamPlayers, open, closeForm} = props

  function handleClick(player, i){
      setTeamPlayers([...teamPlayers, player])
    closeForm();
  }
  
  return (
    <div>
      <List>
        {players.map((player) => (
          <>
            <ListItem 
              key={player.player_id}
              button
              onClick={() => handleClick(player, props.idx)}
            >
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              {player.player_name}
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </div>
  )
}

export default PlayersList;