import React, { useContext } from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Player from './Player';

import {useStyles} from './styles/TeamStyles';
import { Typography } from '@material-ui/core';

function Team(props){
  const classes = useStyles();
  const {teamPlayers, teamName} = props;

  const getPosition = (position) => {
    switch(position){
      case 'Goalkeeper':
        return 10
      case 'Defender':
        return 3
      case 'Midfielder':
          return 4 
      case 'Attacker':
          return 3
      case undefined :
          return 3
    }
  }

  return(
      <Paper className={classes.root}>
        <Typography variant='h4' className={classes.title}>{teamName}</Typography>
        <Grid container className={classes.container} spacing={4}>
        {teamPlayers.map((player, i) => (
              <Grid className={classes.playerContainer} style={{backgroundColor: 'transparent'}} xs={getPosition(player.position)}>
                  <Player idx={i} player={player}/>
              </Grid>
          ))
        }
        </Grid>
      </Paper>
  )
}

export default Team;