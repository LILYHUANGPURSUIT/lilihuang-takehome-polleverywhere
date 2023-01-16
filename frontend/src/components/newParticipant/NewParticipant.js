import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavBar } from '../navbar/NavBar'


export const NewParticipant = () => {
  return (
    <>
        <div className='participantForm'>
        <h2 className='participantForm__title'>Register to participant in the raffle:</h2>
        <form className='participantForm__main'>
            <div className='participantForm__main__firstname'>
                <label htmlFor="participant">First Name: </label>
                <input type="text" className="newparticipant-name" id="participant-name" required/>
                
            </div>
            <div className='participantForm__main__lastname'>
                <label htmlFor="participant">Last Name: </label>
                <input type="text" className="newparticipant-name" id="participant-name" required/>
                
            </div>
            <div className='participantForm__main__email'>
                <label htmlFor="email">Email: </label>
                <input type="email" className="form-control" id="secretToken" required/>
            </div>
            <div className='participantForm__main__phone'>
                <label htmlFor="participant">Phone: </label>
                <input type="text" className="newparticipant-phone" id="participant-phone" />
            </div>
            
            <button type="submit" className="btn btn-primary">Submit</button>
            <button type="submit" className="btn btn-secondery">Reset</button>
        </form>
    </div>
    </>
    
  )
}
