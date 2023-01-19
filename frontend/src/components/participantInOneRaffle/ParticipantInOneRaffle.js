import React from 'react'

export const ParticipantInOneRaffle = ({ participant }) => {
  return (
    <div className='participantCard'>
      <div className="card">
        <h3 className="card-header">
          {participant.firstname} {participant.lastname}
        </h3>
        <ul className="card-body">
            <li className="card-text">
              id: {participant.id}
            </li>
            <li className="card-text">
              email: {participant.email}
            </li>
            <li className="card-text">
              phone: {participant.phone}
            </li> 
        </ul>
      </div>
    </div>
  )
}
