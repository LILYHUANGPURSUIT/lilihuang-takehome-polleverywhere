import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ParticipantInOneRaffle } from '../../components/participantInOneRaffle/ParticipantInOneRaffle'

export const Participants = () => {
  const [ participants, setParticipants ] = useState([]);
  const API = process.env.REACT_APP_API_URL;
  const { id } = useParams();
  console.log(id)
  useEffect(() => {
    axios
      .get(`${API}/api/raffles/${id}/participants`)
      .then((response) => {
        setParticipants(response.data.result);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [API, id]);

  return (
    <div>
        <h2>Participants: total number of this Raffle</h2>
        {participants.map( participant => {
          return <ParticipantInOneRaffle key={participant.id} participant={participant}/>
        })}
        
    </div>
  )
}
