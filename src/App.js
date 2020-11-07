import React, {useEffect, useState} from 'react';
import {Switch, Route} from 'react-router-dom';
import CreateTeam from './CreateTeam';
import HomePage from './HomePage';
import Navbar from './Navbar';
import Team from './Team';
import { FormContextProvider } from './contexts/FormContext';
import { CreateTeamContextProvider } from './contexts/CreateTeamContexts';

import {getTeams} from './utils/requestsLocalApi';

const defaultTeams = [1,2,3,4,5,6]
const defaultTeam = {
  teamName : '',
  teamPlayers: [1,2,3,4,5],
  teamModule:[12,3,3,3,3,3,3,3,3,4,4]
}

function App() {
  const [teams, setTeams] = useState(defaultTeams)

  useEffect(() => {
    async function getTeamsInEffect(){
      const res = await getTeams();
      setTeams(res);
    }
    getTeamsInEffect()
  }, [teams.length])

  const getTeam = (props) => {
    let id = props.match.params._id;
    let currTeam = teams.find(team => (
      team._id === id
    ))
      if(currTeam === undefined){
        return <Team {...props} team={defaultTeam}/>
      }
    return <Team {...props} team={currTeam}/>
  }
  return (
      <CreateTeamContextProvider>
        <FormContextProvider>
        <div>
          <Navbar/>
            <div className='root'>
                <Switch>
                  <Route exact path='/' render={() => <HomePage teams={teams}/>} />
                  <Route exact path='/team/:_id' render={getTeam} />
                  <Route exact path='/create' render={() => <CreateTeam />} /> 
                </Switch>
            </div>
        </div>  
      </FormContextProvider>
    </CreateTeamContextProvider>

  );
}

export default App;
