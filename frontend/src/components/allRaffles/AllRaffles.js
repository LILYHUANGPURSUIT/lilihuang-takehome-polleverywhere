// import axios from 'axios';
import React, { useState } from 'react'
import { RaffleCard } from '../raffleCard/RaffleCard';
import { NavBar } from '../navbar/NavBar';
import "./allRaffles.css"


// const API = process.env.REACT_APP_API_URL;

export const AllRaffles = ({ raffles, setRaffles }) => {

  const [ currentRaffle, setCurrentRaffle ] = useState({});

  const handleSortByCreatedDate =(e)=> {
    console.log(e.target.value)
    if(e.target.value === "ascending-date") {
      const ascendingOrder = [...raffles].sort(raffle => {
        console.log(raffle.date_created)
        console.log(Date.parse(raffle.date_created))
      })
    }
  }

  return (
    <>
      <h2 className='raffle__list__title'>All Raffles: </h2>
      <select onChange={handleSortByCreatedDate}>
        <option>pleae select below</option>
        <option value="ascending-date">Sort by created date</option>
      </select>
      <div className='raffle__list'>
        {raffles.map( raffle => {
          return <RaffleCard key={raffle.id} raffle={raffle} setCurrentRaffle={setCurrentRaffle} />
        })}
      </div>
    </>
    
  )
}
