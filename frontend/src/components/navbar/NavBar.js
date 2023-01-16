import React from 'react';
import { Link } from "react-router-dom";

export const NavBar = ( { raffle_id }) => {
  return (
    <nav>
        <Link to="/"><button>All Raffles</button></Link>
        <Link to={`/raffles/${raffle_id}/register`}><button>Register</button></Link>
        <Link to={`/raffles/${raffle_id}/participants`}><button>Participants</button></Link>
        <Link to={`/raffles/${raffle_id}/winner`}><button>Pick Winner</button></Link>
    </nav>
  )
}
