import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageAlert } from '../MessageAlert';
import "./withoutWinner.css"

const API = process.env.REACT_APP_API_URL;

export const WithoutWinner = ({currentRaffle, allparticipants }) => {

  const [ token, setToken ] = useState({
    "secret_token": ""
  })

  const navigate = useNavigate()

  const handleTextChange =(e)=>{
    setToken({...token, [e.target.id]: e.target.value})
}

const handlePickAWinner = () => {
  if(!allparticipants.length) {
     alert("no participant yet");
     return;
  }
  if(allparticipants.length && (currentRaffle.secret_token === token.secret_token)) {
    
    axios.put(`${API}/api/raffles/${currentRaffle.id}/winner`, token)
      .then(() => MessageAlert())
      .catch(err => console.log(err))
  } else {
    alert("secret token incorrect or no participant")
  }
}

  return (
    <div className="col-md-6" id="noWinner">
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
          <button 
            type="button" 
            className="btn btn-outline-primary btn-lg"
            id="pickWinnerBtn"
            onClick={handlePickAWinner}>
            Pick a Winner
          </button>
    </div>
    
  )
}
