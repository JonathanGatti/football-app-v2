import React from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Player from './Player';

import {useStyles} from './styles/TeamStyles';
import { Typography } from '@material-ui/core';

function Team(props){
  const classes = useStyles();
  const {team} = props;
  const {teamPlayers, teamModule,teamName} = team;

 
  return(
      <Paper className={classes.root}>
        <Typography variant='h4' className={classes.title}>{teamName}</Typography>
        <Grid container className={classes.container} spacing={4}>
        {teamPlayers.map((player,i) => (
          <Grid item xs={teamModule[i]}>
            <Paper className={classes.playerContainer}>
              {player.player_name}
            </Paper>
          </Grid>
        ))}
      </Grid>
      </Paper>
  )
}

export default Team;