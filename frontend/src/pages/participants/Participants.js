import React from 'react'
import { ParticipantInOneRaffle } from '../../components/participantInOneRaffle/ParticipantInOneRaffle'

export const Participants = () => {
  return (
    <div>
        <h2>Participants: total number of this Raffle</h2>
        {/* // use map method to render the component below */}
        <ParticipantInOneRaffle />
    </div>
  )
}
