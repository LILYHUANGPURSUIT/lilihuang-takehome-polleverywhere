import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./withoutWinner.css"

const API = process.env.REACT_APP_API_URL;

export const WithoutWinner = ({currentRaffle, allparticipants, setFinalWinner }) => {

  const [ token, setToken ] = useState({
    "secret_token": ""
  })

  const navigate = useNavigate()

  const handleTextChange =(e)=>{
    setToken({...token, [e.target.id]: e.target.value})
}

const handlePickAWinner = () => {
  console.log("all: ", allparticipants)
  if(!allparticipants.length) {
     alert("no participant yet");
     return;
  }
  if(allparticipants.length && (currentRaffle.secret_token === token.secret_token)) {
    
    axios.put(`${API}/api/raffles/${currentRaffle.id}/winner`, token)
      .then((res) => {
        console.log(res.data.result)
        const { winner_id } = res.data.result;
        console.log(winner_id)
        axios.get(`${API}/api/raffles/${winner_id}/winner`)
          .then((response) => {
            setFinalWinner(response.data.result)
            console.log(response.data.result)
          })
      })
      .catch(err => console.log(err))
  } else {
    console.log("fail")
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
