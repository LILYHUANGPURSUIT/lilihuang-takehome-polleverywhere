import React, { useState } from 'react';
import axios from 'axios';
import "./newRaffle.css"

const API = process.env.REACT_APP_API_URL;

export const NewRaffle = ({setRaffles}) => {

  const currentDateAndTime = Date().toLocaleString();
  // const currentDateAndTime = currentDateAndTimeArr.slice(0,4).join(" ") + " at " + currentDateAndTimeArr.slice(4,5).join(" ")

  const [ raffle, setRaffle ] = useState(
      {
        name: "",
        secret_token: "",
        date_created: currentDateAndTime,
      }
    );
 

    const addRaffle = () => {
      axios
        .post(`${API}/api/raffles`, raffle)
        .then(() => {
          setRaffle({
            name: "",
            secret_token: "",
          })
          axios.get(`${API}/api/raffles`)
          .then((response) => {
            setRaffles(response.data.result)
          })
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
                  className="form-control" 
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
