import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AllRaffles } from "./components/allRaffles/AllRaffles";
import { NewParticipant } from "./components/newParticipant/NewParticipant";
import { RaffleCard } from "./components/raffleCard/RaffleCard";
import { Home } from './pages/home/Home';
import { Participants } from "./pages/participants/Participants";
import Raffle from "./pages/raffle/Raffle";
import { Winner } from "./pages/winner/Winner";

function App() {
  return (
    <div className="App">
      {/* <Link to="/"><h1>Raffle App</h1></Link> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
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
