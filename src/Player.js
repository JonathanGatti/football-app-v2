import React from 'react';


function Player(props) {
  const {player} = props
  return (
    <div>
      <div>
        <p style={{color: 'white'}}>{player.player_name}</p>
      </div>
    </div>
  )
}

export default Player;