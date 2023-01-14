import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AllRaffles } from "./components/allRaffles/AllRaffles";
import { NewParticipant } from "./components/newParticipant/NewParticipant";
import { Home } from './pages/home/Home';

function App() {
  return (
    <div className="App">
      <h1>Raffle App</h1>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/raffles" element={<AllRaffles />} />
          <Route path="/raffles/:id/participants" element={<NewParticipant />} />
          {/* <Route path="/raffles/:id/winner" element={<Winner />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
