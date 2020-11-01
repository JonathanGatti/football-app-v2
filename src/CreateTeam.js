import React, {useState} from 'react';
import Paper from '@material-ui/core/Paper';
import { useStyles } from './styles/CreateTeamStyles';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';



function CreateTeam(){
  const classes = useStyles();
  const classic =  [12,3,3,3,3,3,3,3,3,4,4]
  const defensive =  [12,2,2,2,2,2,4,4,4,4,4]
  const offensive = [12,3,3,3,3,4,4,4,4,4,4]

  const [module, setModule] = useState(classic);

  const handleChange = (e) =>{
    setModule(e.target.value)
    console.log(module);
  }

  return (
    <div className={classes.root}>
      <div className={classes.selectContainer}>
        <Typography>Select a module: </Typography>
              <Select value={module} onChange={handleChange}>
                <MenuItem value={defensive}>defensive 5-3-2</MenuItem>
                <MenuItem value={classic}>classic 4-4-2</MenuItem>
                <MenuItem value={offensive}>offensive 4-3-3</MenuItem>
              </Select>
            </div>
      <Grid container className={classes.container} spacing={3}>
        {module.map((i) => (
        <Grid item xs={i}>
          <Paper className={classes.paper}>search for a player</Paper>
        </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default CreateTeam;