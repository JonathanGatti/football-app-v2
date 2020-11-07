import React, { useState, useEffect} from 'react';
import Paper from '@material-ui/core/Paper';
import {postData} from './utils/requestsLocalApi';
import Player from './Player';
import { useStyles } from './styles/CreateTeamStyles';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Snackbar from '@material-ui/core/SnackBar';
import useSnackBar from './hooks/useSnackBar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import SearchPlayerForm from './SearchPlayerForm';

const classic =  [12,3,3,3,3,3,3,3,3,4,4]
const defensive =  [12,2,2,2,2,2,4,4,4,4,4]
const offensive = [12,3,3,3,3,4,4,4,4,4,4]


function CreateTeam(){
  const classes = useStyles();
  const [module, setModule] = useState(classic);
  const [isOpen, openSnackBar, closeSnackBar] = useSnackBar(false);
  const [open, setIsOpen] = useState(false);
  const [teamName, setTeamName] = useState('');
  const [teamPlayers, setTeamPlayers] = useState(classic);
  const [idx, setIdx] = useState(0);

  const handleSelectChange = (e) =>{
    setModule(e.target.value)
  }

  const handleNameChange = (e) => {
    setTeamName(e.target.value)
  }

  const handleClick = () => {
    setIsOpen(true);
  }

  const closeForm = () => {
    setIsOpen(false)
  }

  function submitTeam(){
    console.log(teamName, teamPlayers, module);
    const data = {
      teamName : teamName,
      teamPlayers: teamPlayers,
      teamModule: module
    }
    postData(data)
  }

  return (
    <div className={classes.root}>
      <div className={classes.valsContainer}>
        <div className={classes.selectContainer}>
          <div className={classes.val}>
          <Typography>Select a module: </Typography>
                  <Select value={module} onChange={handleSelectChange}>
                    <MenuItem value={defensive}>defensive 5-3-2</MenuItem>
                    <MenuItem value={classic}>classic 4-4-2</MenuItem>
                    <MenuItem value={offensive}>offensive 4-3-3</MenuItem>
                  </Select>
          </div>
            <div className={classes.val}>
              <Typography >Insert a Name: </Typography>
                  <form className='form' 
                    onSubmit={e => {
                      e.preventDefault()
                      openSnackBar()
                  }}>
                    <TextField 
                        margin='normal'
                        label='Name Your team'
                        val={teamName}
                        onChange={handleNameChange}
                        InputProps={{
                          className: classes.input,
                      }}
                    />
                  </form>
              </div>
          </div>
        {teamName !== '' && <Typography variant='h4' className={classes.title}>{teamName}</Typography>}
        <Button 
          className={classes.submitBtn} 
          variant="contained" 
          onClick={()=> submitTeam()
          }>SUBMIT
        </Button>
      </div> 
      <Grid container className={classes.container} spacing={3}>
        {module.map((size,i) => (
        <Grid item xs={size}>
          {teamPlayers[i].player_name === undefined ?
          <Paper className={classes.paper}>
            <Button onClick={() => {
              setIdx(i)
              handleClick()
              }}>
              Search for a Player
            </Button>      
          </Paper> 
          :
          <Paper className={classes.paper}>
            <Player player={teamPlayers[i]}/> 
          </Paper>
          }
          {
          open &&
          <SearchPlayerForm 
            open={open} 
            closeForm={closeForm}
            teamPlayers={teamPlayers}
            setTeamPlayers={setTeamPlayers}
            idx={idx}
          />
          }
        </Grid>
        ))}
      </Grid>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={isOpen}
        autoHideDuration={3000}
        onClose={closeSnackBar}
        message="Name saved!"
        action={
          <React.Fragment>
            <IconButton size="small" aria-label="close" color="inherit" onClick={closeSnackBar}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  )
}

export default CreateTeam;