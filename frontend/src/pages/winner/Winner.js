import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { WithoutWinner } from '../../components/withoutWinner/WithoutWinner'
import { WithWinner } from '../../components/withWinner/WithWinner'

const API = process.env.REACT_APP_API_URL;

export const Winner = ({allparticipants}) => {
  
  const [ currentRaffle, setCurrentRaffle ] = useState([]);
  const { id } =useParams();

  useEffect(()=> {
    axios.get(`${API}/api/raffles/${id}`)
      .then(response => setCurrentRaffle(response.data.result))
      .catch(err => console.log(err))
  },[])

  return (
    <div>
        {currentRaffle.winner_id ? 
        <WithWinner currentRaffle={currentRaffle} /> :
        <WithoutWinner currentRaffle={currentRaffle} allparticipants = {allparticipants} />}
    </div>
  )
}
