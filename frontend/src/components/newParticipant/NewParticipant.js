import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export const NewParticipant = () => {


    const [ participant, setparticipant ] = useState(
        {
          firstname: "",
          lastname: "",
          email: "",
          phone: ""
        }
      );
    const navigate = useNavigate()
  
    //   const addRaffle = () => {
    //     axios
    //       .post(`${API}/api/raffles/${raffle_id}/participants`, participant)
    //       .then(() => {
            
    //         navigate(`${API}/api/raffles/${raffle_id}/participants`);
    //       })
    //       .catch((c) => console.warn("catch", c));
  
          
    //   };
    
      const handleTextChange = (event) => {
        setparticipant({ ...participant, [event.target.id]: event.target.value });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        // addRaffle();
      };

  return (
    <>
        <h2 className='participantForm__title'>Register to participant in the raffle:</h2>

        <form class="row g-3" onSubmit={handleSubmit}>
        <div class="col-md-6">
            <label htmlFor="participant__firstname" className="form-label">First Name</label>
            <input type="text" className="form-control" id="participant__firstname" onChange={handleTextChange} required/>
        </div>
        <div className="col-md-6">
            <label htmlFor="participant__lastname" className="form-label">Last Name</label>
            <input type="text" className="form-control" id="participant__lastname" onChange={handleTextChange} required/>
        </div>
        <div className="col-md-6">
            <label htmlFor="participant__email" className="form-label">Email</label>
            <input type="email" className="form-control" id="participant__email" onChange={handleTextChange} required/>
        </div>
        
        
        <div className="col-12">
            <button type="submit" className="btn btn-primary">Submit</button>
            <button type="submit" className="btn btn-secondery">Reset</button>
        </div>
        </form>
        
    </>
    
  )
}
