import React from 'react';
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav>
        <Link to="/"><button>All Raffles</button></Link>
        <Link to="/"><button>Register</button></Link>
        <Link to="/"><button>Participants</button></Link>
        <Link to="/"><button>Pick Winner</button></Link>
    </nav>
  )
}
