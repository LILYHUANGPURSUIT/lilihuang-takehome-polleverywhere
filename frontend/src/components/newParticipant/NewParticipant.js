import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import "./newParticipant.css"
import { MessageAlert } from '../MessageAlert';

const API = process.env.REACT_APP_API_URL;

export const NewParticipant = () => {

    const {id} = useParams();

    const [ participant, setParticipant ] = useState(
        {
          firstname: "",
          lastname: "",
          email: "",
          phone: ""
        }
      );
  
      const addParticipant = () => {
        axios
          .post(`${API}/api/raffles/${id}/participants`, participant)
          .then(() => {
            const allRequiredfield = participant.firstname && participant.lastname && participant.email;
            allRequiredfield && new MessageAlert();
          })
          .catch((c) => {
            console.warn("catch", c)
          });
      };
    
      const handleTextChange = (event) => {
        setParticipant({ ...participant, [event.target.id]: event.target.value });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        addParticipant();
      };

      const reset =()=> {
        setParticipant({
          firstname: "",
          lastname: "",
          email: "",
          phone: ""
        })
      }

  return (
    <div className='newParticipant'>
        <h2 className='participantForm__title'>Register to participant in the raffle:</h2>

        <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
            <label htmlFor="firstname" className="form-label">First Name</label>
            <input type="text" value={participant.firstname} className="form-control" id="firstname" onChange={handleTextChange} required/>
        </div>
        <div className="col-md-6">
            <label htmlFor="lastname" className="form-label">Last Name</label>
            <input type="text" value={participant.lastname}className="form-control" id="lastname" onChange={handleTextChange} required/>
        </div>
        <div className="col-md-6">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" value={participant.email}className="form-control" id="email" onChange={handleTextChange} required/>
        </div>
        <div className="col-md-6">
            <label htmlFor="phone" className="form-label">Phone Number</label>
            <input type="text" value={participant.phone}className="form-control" id="phone" onChange={handleTextChange} />
        </div>
        
        
        <div className="col-12">
            <button type="submit" className="btn btn-primary" >Submit</button>
            <button type="submit" className="btn btn-secondery" onClick={reset}>Reset</button>
        </div>
        </form>
        
    </div>
    
  )
}
