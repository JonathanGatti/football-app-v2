import React from 'react';
import {Link} from 'react-router-dom';
import {deleteTeam} from './utils/requestsLocalApi'

import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';

import {useStyles} from './styles/HomePageStyles';

function HomePage(props){
  const classes = useStyles();
  const {teams} = props;

  return (
    <Grid container className={classes.root} >
      <Typography className={classes.title} variant='h3'>The Football App</Typography>
      <Grid item xs={12}>
        <Grid container className={classes.container} >
          {teams.map(team => (
            <Grid key={team._id} item>
            <Link className={classes.link} to={`team/${team._id}`}>
              <Button className={classes.linkBtn}>
                {team.teamName}
                <DeleteIcon 
                  className={classes.deleteBtn} 
                  onClick={() => deleteTeam(team)
                  }/>
              </Button>
            </Link>
          </Grid>
          ))}
          </Grid>
        </Grid>
    </Grid>
  )
}

export default HomePage