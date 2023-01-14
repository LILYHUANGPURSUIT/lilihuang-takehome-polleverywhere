import React from 'react'
import { Raffle } from '../raffle/Raffle'

export const AllRaffles = () => {
  return (
    <div>
        <h2>All Raffles: </h2>
        {/* // use map method and pass pros each raffle to component Raffle */}
        <Raffle />
    </div>
  )
}
