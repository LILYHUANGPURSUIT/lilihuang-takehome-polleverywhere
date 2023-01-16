import React, { useState, navigate } from 'react';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

export const NewRaffle = () => {


  const [ raffle, setRaffle ] = useState(
      {
        name: "",
        secret_token: "",
        date_created: Date.now(),
      }
    );

    const addRaffle = () => {
      axios
        .post(`${API}/raffles`, raffle)
        .then(() => {
          
          navigate(`/`);
        })
        .catch((c) => console.warn("catch", c));
    };
  
    const handleTextChange = (event) => {
      setRaffle({ ...raffle, [event.target.id]: event.target.value });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      addRaffle();
    };
  
  
  

  return (
    <div className='raffleForm'>
        <h2 className='raffleForm__title'>New Raffle:</h2>
        <form className='raffleForm__main' onSubmit={handleSubmit}>
            <div className='raffleForm__main__name'>
                <label htmlFor="raffle">Raffle Name: </label>
                <input 
                  type="text" 
                  className="newRaffle-name" 
                  id="name" 
                  value={raffle.name}
                  onChange={handleTextChange}
                  required/>
                
            </div>
            <div className='raffleForm__main__secretToken'>
                <label htmlFor="secretToken">Secret Token: </label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="secret_token" 
                  value={raffle.secret_token}
                  onChange={handleTextChange}
                  required/>
                <small id="required-message" className="form-text text-muted">You must remember the Raffle Token because it will be asked when picking a winner.</small>
            </div>
            
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}
