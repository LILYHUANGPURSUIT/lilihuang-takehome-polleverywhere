import React from 'react'
import { Outlet, useParams } from 'react-router-dom';

import { NavBar } from '../../components/navbar/NavBar'

const Raffle = () => {

  const { id } = useParams();

  return (
    <div>
        <NavBar raffle_id={id}/>
        
        <Outlet />

    </div>
  )
}

export default Raffle