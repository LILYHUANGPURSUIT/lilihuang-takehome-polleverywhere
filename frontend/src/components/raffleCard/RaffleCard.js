import React from 'react'
import { Link } from "react-router-dom";
import "./raffleCard.css"

export const RaffleCard = ({ raffle, setCurrentRaffle }) => {

  return (
    <div className='raffleCard'>
        <Link to={`/raffles/${raffle.id}`} onClick={() => setCurrentRaffle(raffle)}>
        <div class="card">
            <h3 class="card-header">
                {raffle.name}
            </h3>
            <ul className="card-body">
                <li className="card-text">
                    Created on: {raffle.date_created}
                </li>
                <li className="card-text">
                    Winner Id: {raffle.winner_id ? raffle.winner_id : "No one yet"}
                </li>
                <li className="card-text">
                    {raffle.date_raffled ? `Raffled on:  ${raffle.date_raffled}` : "Not raffled yet"} 
                </li> 
            </ul>
        </div>
        </Link>
    </div>
  )
}

