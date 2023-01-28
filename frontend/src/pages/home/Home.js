import React from 'react'
import { AllRaffles } from '../../components/allRaffles/AllRaffles'
import { NewRaffle } from '../../components/newRaffle/NewRaffle'

export const Home = ({raffles, setRaffles}) => {
  return (
    <div className='home_container'>
        <NewRaffle  setRaffles={setRaffles} />
        <AllRaffles raffles={raffles} setRaffles={setRaffles}/>
    </div>
  )
}
