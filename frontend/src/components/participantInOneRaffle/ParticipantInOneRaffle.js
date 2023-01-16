import React from 'react'

export const ParticipantInOneRaffle = ({ participant }) => {
  return (
    <div>
        <h3>{participant.firstname} {participant.lastname}</h3>
        <ul>
            <li>id: {participant.id}</li>
            <li>email: {participant.email}</li>
            <li>phone: {participant.phone}</li>
        </ul>
    </div>
  )
}
