import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./withWinner.css"

const API = process.env.REACT_APP_API_URL;

export const WithWinner = ({currentRaffle}) => {

  const [ winner, setWinner ] = useState([]);

  useEffect(() => {
    axios.get((`${API}/api/${currentRaffle.id}/winner`))
    .then((response) => setWinner(response.data.result))
    .catch(err => console.log(err))
  })
  
  return (
    <div className="winnerCard">
        <img src="https://t3.ftcdn.net/jpg/03/76/67/56/360_F_376675663_KfWjTqneCLrmq2pQthRGHFFH4T2rNLzX.jpg" className="winnerCard__img" alt="placeholder"/>
      <div className="winnerCard__info">
        <h3>Winner Name: {winner.firstname} {winner.lastname}</h3>
        <ul>
            <li>Registered on Sat may 22 2021 at 8:03:17 PM</li>
            <li>winner id: {currentRaffle.winner_id}</li>
            <li>winner email: {winner.email}</li>
            <li>winner phone number: {winner.phone}</li>
        </ul>
      </div>
    </div>
    
  )
}
