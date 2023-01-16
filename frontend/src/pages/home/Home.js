import React from 'react'
import { AllRaffles } from '../../components/allRaffles/AllRaffles'
import { NewRaffle } from '../../components/newRaffle/NewRaffle'

export const Home = ( {raffles}) => {
  return (
    <div className='home_container'>
        <NewRaffle />
        <AllRaffles raffles={raffles}/>
    </div>
  )
}
