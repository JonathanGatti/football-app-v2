import React from 'react';
import {Link} from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';

import {useStyles} from './styles/NavbarStyles';

function Navbar(){
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              <Link className={classes.link} to='/'>
                <Button color="inherit">Home</Button>  
              </Link>
            </Typography>
            <Typography variant="h6" className={classes.title}>
              <Link className={classes.link} to='/create'>
                <Button color="inherit">Create Team</Button>
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    </header>
  );
}

export default Navbar;