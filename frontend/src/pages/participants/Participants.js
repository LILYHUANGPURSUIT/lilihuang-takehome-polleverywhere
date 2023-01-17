import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./participants.css"
import { ParticipantInOneRaffle } from '../../components/participantInOneRaffle/ParticipantInOneRaffle'

const API = process.env.REACT_APP_API_URL;

export const Participants = ({setAllParticipants}) => {

  const [ participants, setParticipants ] = useState([]);
  
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${API}/api/raffles/${id}/participants`)
      .then((response) => {
        setParticipants(response.data.result);
        setAllParticipants(response.data.result);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [API, id]);

  return (
    <div className='participants__page'>
        <h2>Participants: {participants.length} total</h2>
        {participants.map( participant => {
          return <ParticipantInOneRaffle key={participant.id} participant={participant}/>
        })}
        
    </div>
  )
}
