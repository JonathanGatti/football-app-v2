import React, {useEffect, useState} from 'react';
import {Switch, Route} from 'react-router-dom';
import CreateTeam from './CreateTeam';
import HomePage from './HomePage';
import Navbar from './Navbar';
import {getTeams} from './utils/requestsLocalApi';

const defaultTeams = [1,2,3,4,5,6]

function App() {
  const [teams, setTeams] = useState(defaultTeams)

  useEffect(() => {
    async function getTeamsInEffect(){
      const res = await getTeams();
      setTeams(res);
    }
    getTeamsInEffect()
  }, [teams.length])

  return (
    <div>
      <Navbar/>
        <div className='root'>
            <Switch>
              <Route exact path='/' render={() => <HomePage teams={teams}/>} />
              <Route exact path='/team/:_id' render={() => <HomePage />} />
              <Route exact path='/create' render={() => <CreateTeam />} />
            </Switch>
        </div>
   </div>  
  );
}

export default App;
