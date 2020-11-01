import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import background from './imgs/3dsection.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    height: '100vh',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'rgba(19,14,58,1.0)',
  },
  container: {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    marginTop: '0.5rem',
    width: '90%',
    display: 'flex',
    justifyContent: 'center'
  },
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(3),
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '200px',
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const defensive =  [10,3,3,3,3,3,3,3,3,4,4]

function CreateTeam(){
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container className={classes.container} spacing={3}>
        {defensive.map((i) => (
        <Grid item xs={i}>
          <Paper className={classes.paper}>search for a player</Paper>
        </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default CreateTeam;