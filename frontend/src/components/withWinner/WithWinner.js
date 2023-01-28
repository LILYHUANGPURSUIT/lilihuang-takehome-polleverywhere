import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./withWinner.css"

const API = process.env.REACT_APP_API_URL;

export const WithWinner = ({currentRaffle}) => {

  const [ winner, setWinner ] = useState([]);

  useEffect(() => {
    axios.get(`${API}/api/raffles/${currentRaffle.id}/winner`)
    .then((response) => setWinner(response.data.result))
    .catch(err => console.log(err))
  })
  
  return (
    <div className="winnerCard">
        <img src="https://t3.ftcdn.net/jpg/03/76/67/56/360_F_376675663_KfWjTqneCLrmq2pQthRGHFFH4T2rNLzX.jpg" className="winnerCard__img" alt="placeholder"/>
      <div className="winnerCard__info">
        <h3>Winner Name: {winner.firstname} {winner.lastname}</h3>
        <ul>
            <li>Raffle Date: {currentRaffle.date_raffled}</li>
            <li>Winner Id: {winner.id}</li>
            <li>Winner Email: {winner.email}</li>
            <li>Winner Phone Number: {winner.phone}</li>
        </ul>
      </div>
    </div>
    
  )
}
