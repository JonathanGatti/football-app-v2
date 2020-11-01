import React, {useContext, useState} from 'react';
import useSearchPlayerForm from './hooks/useSearchPlayerForm';
import {FormContext} from './contexts/FormContext';

import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import PlayersList from './PlayersList';
import {getData} from './utils/fetchData';
import { CreateTeamContext } from './contexts/CreateTeamContexts';

function SearchPlayerForm(props) {
  const {open} = props
  const [val, handleChange, reset] = useSearchPlayerForm('');
  const {handleClickClose} = useContext(FormContext);
  const [players, setPlayers] = useState()
  
  const handleSubmit = async () =>{
    const team = await getData(val)
    setPlayers(team)
  } 
  return (
      <div>
        <Dialog  open={open} onClose={handleClickClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Search for a Player</DialogTitle>
          <DialogContent>
            <form onSubmit={e => {
              e.preventDefault()
              handleSubmit()
              reset()
            }}>
              <TextField 
                margin='normal'
                label='player name'
                value={val}
                onChange={handleChange}
              />
            </form>
            {players && <PlayersList players={players} idx={props.idx}/>}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClickClose} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div>
  )
}

export default SearchPlayerForm;