import React, {createContext, useState} from 'react';

export const CreateTeamContext = createContext();

const defaultPlayers = []

export function CreateTeamContextProvider(props) {
  const [teamPlayers, setTeamPlayers] = useState(defaultPlayers)

  const getPosition = (position) => {
    switch(position){
      case 'Goalkeeper':
        return 10
      case 'Defender':
        return 3
      case 'Midfielder':
          return 4 
      case 'Attacker':
          return 3
      case undefined :
          return 3
    }
  }

  const updateTeam = (newPlayer) => {
    const updatedTeam = teamPlayers.push(newPlayer);
    setTeamPlayers(updatedTeam)
  }
  
  return (
    <CreateTeamContext.Provider value={{teamPlayers, setTeamPlayers, getPosition, updateTeam}}>
      {props.children}
    </CreateTeamContext.Provider>
  )
}