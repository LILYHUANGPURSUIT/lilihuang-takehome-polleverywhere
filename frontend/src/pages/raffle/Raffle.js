import React from 'react'
import { Outlet } from 'react-router-dom';

import { NavBar } from '../../components/navbar/NavBar'

const Raffle = () => {

  return (
    <div>
        <NavBar />
        
        <Outlet />

        <small>Please click Register tag to signup as a participant</small>
    </div>
  )
}

export default Raffle