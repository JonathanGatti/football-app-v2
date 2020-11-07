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
        return <Team {...props} teamPlayers={[1,2,3,4,5,6]} teamName={''} teamModule={[1,2,3,4,5,6]}/>
      }
    return <Team {...props} teamPlayers={currTeam.teamPlayers} teamName={currTeam.teamName} teamModule={currTeam.teamModule}/>
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
