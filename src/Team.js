import React, { useContext } from 'react';
import { FormContextProvider } from './contexts/FormContext';
import { CreateTeamContext } from './contexts/CreateTeamContexts';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Player from './Player';

import {useStyles} from './styles/TeamStyles';
import { Typography } from '@material-ui/core';

function Team(props){
  const classes = useStyles();
  const {teamPlayers, teamName} = props;
  const {getPosition} = useContext(CreateTeamContext)

  return(
      <Paper className={classes.root}>
        <Typography variant='h4' className={classes.title}>{teamName}</Typography>
        <Grid container className={classes.container} spacing={4}>
        {teamPlayers.map((player, i) => (
          <FormContextProvider key={i}>
              <Grid className={classes.playerContainer} style={{backgroundColor: 'transparent'}} xs={getPosition(player.position)}>
                  <Player idx={i} player={player}/>
              </Grid>
          </FormContextProvider>
          ))
        }
        </Grid>
      </Paper>
  )
}

export default Team;