// import axios from 'axios';
import React, { useState } from 'react'
import { RaffleCard } from '../raffleCard/RaffleCard';
import { NavBar } from '../navbar/NavBar';
import "./allRaffles.css"


// const API = process.env.REACT_APP_API_URL;

export const AllRaffles = ({ raffles }) => {

  // const [ raffles, setRaffles ] = useState([]);
  const [ currentRaffle, setCurrentRaffle ] = useState({});

  // useEffect(() => {
  //   axios
  //     .get(`${API}/api/raffles`)
  //     .then((response) => {
  //       setRaffles(response.data.result);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  // }, []);

  return (
    <>
      {/* <NavBar raffle_id={currentRaffle.id} className="nav" /> */}
      <div className='raffle__list'>
          
          <h2 className='raffle__list__title'>All Raffles: </h2>
          {raffles.map( raffle => {
            return <RaffleCard key={raffle.id} raffle={raffle} setCurrentRaffle={setCurrentRaffle} />
          })}
      </div>
    </>
    
  )
}
