import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from 'axios';
import React, { useState, useEffect } from 'react' 
import { NewParticipant } from "./components/newParticipant/NewParticipant";
import { Home } from './pages/home/Home';
import { Participants } from "./pages/participants/Participants";
import Raffle from "./pages/raffle/Raffle";
import { Winner } from "./pages/winner/Winner";
import "./App.css"



const API = process.env.REACT_APP_API_URL;

function App() {

  const [ raffles, setRaffles ] = useState([]);
  const [ allparticipants, setAllParticipants ] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/api/raffles`)
      .then((response) => {
        setRaffles(response.data.result);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  return (
    <div className="App">
      <h1 className="app__title">Raffle App</h1>
      <Router>
        <Routes>
          <Route path="/" element={<Home raffles= {raffles}  setRaffles={setRaffles}/>} />
            <Route path="/raffles/:id" element={<Raffle />} >
              <Route path="register" element={<NewParticipant />} />
              <Route path="participants" element={<Participants setAllParticipants={setAllParticipants} />} />
              <Route path="winner" element={<Winner allparticipants={allparticipants} />} />
            </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
