import React from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PlayerCard from './PlayerCard';

import {useStyles} from './styles/TeamStyles';
import { Typography } from '@material-ui/core';

function Team(props){
  const classes = useStyles();
  const {teamPlayers, teamModule,teamName} = props.team;

 
  return(
      <Paper className={classes.root}>
        <Typography variant='h4' className={classes.title}>{teamName}</Typography>
        <Grid container className={classes.container} spacing={4}>
        {teamPlayers.map((player,i) => (
          <Grid item xs={teamModule[i]}>
            <PlayerCard player={player} /> 
          </Grid>
        ))}
      </Grid>
      </Paper>
  )
}

export default Team;