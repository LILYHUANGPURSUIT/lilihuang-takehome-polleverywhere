import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./withoutWinner.css"

const API = process.env.REACT_APP_API_URL;

export const WithoutWinner = ({currentRaffle, allparticipants }) => {

  // input secret token 
    // make a put request -- /api/raffles/:id/winner
    // pass secret_token and check if match or not, 
    // update raffle.winner_id, raffle.date_raffled

  const [ token, setToken ] = useState({
    "secret_token": ""
  })

  const navigate = useNavigate()

  const handleTextChange =(e)=>{
    setToken({...token, [e.target.id]: e.target.value})
}

const handlePickAWinner = () => {
  if(allparticipants.length && currentRaffle.secret_token === token.secret_token) {
    axios.put(`${API}/api/raffles/${currentRaffle.id}/winner`, token)
      .then(() => {
        navigate(`/raffles/${currentRaffle.id}/winner`);
      })
      .catch(err => console.log(err))
  }
}

  return (
    <div class="col-md-6" id="noWinner">
        <label htmlFor="secret_token" className="form-label" >
          Pick a Winner
        </label>
        <input 
          type="text" 
          className="form-control" 
          value={token.secret_token}
          id="secret_token"  
          placeholder="secret token" 
          onChange={handleTextChange}
          required/>
          <button onClick={handlePickAWinner}>Pick a Winner</button>
    </div>
    
  )
}
