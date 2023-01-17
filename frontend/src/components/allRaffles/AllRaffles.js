// import axios from 'axios';
import React, { useState } from 'react'
import { RaffleCard } from '../raffleCard/RaffleCard';
import { NavBar } from '../navbar/NavBar';
import "./allRaffles.css"


// const API = process.env.REACT_APP_API_URL;

export const AllRaffles = ({ raffles }) => {

  const [ currentRaffle, setCurrentRaffle ] = useState({});

  return (
    <>
      <h2 className='raffle__list__title'>All Raffles: </h2>
      <div className='raffle__list'>
        {raffles.map( raffle => {
          return <RaffleCard key={raffle.id} raffle={raffle} setCurrentRaffle={setCurrentRaffle} />
        })}
      </div>
    </>
    
  )
}
