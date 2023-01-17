import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Outlet, useParams } from 'react-router-dom';
import "./raffle.css"

import { NavBar } from '../../components/navbar/NavBar'

const API = process.env.REACT_APP_API_URL;

const Raffle = () => {
   
  const [ raffleOnPage, setRaffleOnPage ] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios.get(`${API}/api/raffles/${id}`)
      .then(response => {
        setRaffleOnPage(response.data.result)
      })
      .catch(err => console.log(err))
  }, [id, API])

  return (
    <div className='raffle__pages'>
        <h2 className='raffle__pages__title'>{raffleOnPage.name}</h2>
        <NavBar raffle_id={id}/>
        
        <Outlet />

    </div>
  )
}

export default Raffle