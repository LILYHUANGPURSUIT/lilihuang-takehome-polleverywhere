import React from 'react';
import { Link } from "react-router-dom";
import "./navBar.css";

export const NavBar = ( { raffle_id }) => {
  return (
    <ul class="nav">
      <li class="nav-item">
        <Link to="/" className="nav-link">All Raffles</Link>
        
      </li>
      <li class="nav-item">
        <Link to={`/raffles/${raffle_id}/register`}  className="nav-link">Register</Link>
      </li>
      <li class="nav-item">
      <Link to={`/raffles/${raffle_id}/participants`}  className="nav-link">Participants</Link>
      </li>
      <li class="nav-item">
        <Link to={`/raffles/${raffle_id}/winner`} className="nav-link">Pick Winner</Link>
      </li>
    </ul>

  )
}
