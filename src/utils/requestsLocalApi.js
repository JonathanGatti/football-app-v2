import axios from 'axios';

export async function getTeams(){
  try {
    const res = await axios.get('http://127.0.0.1:3002/api/teams')
    return(res.data)
  }
  catch(e){
    console.log(e);
  }
}

export const postData = (data) => {
  axios.post('http://127.0.0.1:3002/api/teams',
    data,
     {
      headers: {
        'Content-Type': 'application/json',
        }
    })
    .catch(e => {
      console.log(e)
    })
}

export const deleteTeam = (team) => {
  axios.delete(`http://127.0.0.1:3002/api/teams/${team._id}`)
}


  