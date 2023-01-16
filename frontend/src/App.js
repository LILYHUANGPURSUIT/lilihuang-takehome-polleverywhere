import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { AllRaffles } from "./components/allRaffles/AllRaffles";
import { NewParticipant } from "./components/newParticipant/NewParticipant";
import { Home } from './pages/home/Home';
import { Participants } from "./pages/participants/Participants";
import Raffle from "./pages/raffle/Raffle";
import { Winner } from "./pages/winner/Winner";
import "./App.css"



const API = process.env.REACT_APP_API_URL;

function App() {

  const [ raffles, setRaffles ] = useState([]);

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
      {/* <Link to="/"><h1>Raffle App</h1></Link> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home raffles= {raffles}  setRaffles={setRaffles}/>} />
          {/* <Route path="/raffles" element={<AllRaffles />} > */}
          {/* <Route path="/raffle" element={<Raffle />} > */}
            <Route path="/raffles/:id" element={<Raffle />} >
              <Route path="register" element={<NewParticipant />} />
              <Route path="participants" element={<Participants />} />
              <Route path="winner" element={<Winner />} />
            </Route>
          {/* </Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
