import React from 'react'
import { Link } from "react-router-dom";

export const RaffleCard = ({ raffle }) => {
  return (
    <div>
        <Link to={`/raffles/${raffle.id}`}>

            <h3>{raffle.name}</h3>
            <ul>
                <li>
                    Created on: {raffle.date_created}
                </li>
                <li>
                    Winner Id: {raffle.winner_id ? raffle.winner_id : "No one yet"}
                </li>
                <li>
                    {raffle.date_raffled ? `Raffled on:  ${raffle.date_raffled}` : "Not raffled yet"} 
                </li> 
            </ul>
        </Link>
    </div>
  )
}

