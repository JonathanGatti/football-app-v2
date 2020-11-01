import React, {useContext} from 'react';
import { FormContext } from './contexts/FormContext';

import SearchPlayerForm from './SearchPlayerForm';
import Button from '@material-ui/core/Button';


function Player(props) {
  const {player} = props

  return (
    <div>

      <div>
        <p>{player.player_name}</p>
      </div>
    </div>
  )
}

export default Player;