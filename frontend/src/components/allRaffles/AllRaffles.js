import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { RaffleCard } from '../raffleCard/RaffleCard';


const API = process.env.REACT_APP_API_URL;

export const AllRaffles = () => {

  const [ raffles, setRaffles ] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/api/raffles`)
      .then((response) => {
        setRaffles(response.data.result);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  return (
    <div className='raffle__list'>
        <h2>All Raffles: </h2>
        {raffles.map( raffle => {
          return <RaffleCard key={raffle.id} raffle={raffle} />
        })}
        
    </div>
  )
}
