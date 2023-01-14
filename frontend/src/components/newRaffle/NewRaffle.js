import React from 'react'

export const NewRaffle = () => {
  return (
    <div className='raffleForm'>
        <h2 className='raffleForm__title'>New Raffle:</h2>
        <form className='raffleForm__main'>
            <div className='raffleForm__main__name'>
                <label htmlFor="raffle">Raffle Name: </label>
                <input type="email" className="newRaffle-name" id="raffle-name" required/>
                
            </div>
            <div className='raffleForm__main__secretToken'>
                <label htmlFor="secretToken">Secret Token: </label>
                <input type="text" className="form-control" id="secretToken" required/>
                <small id="emailHelp" className="form-text text-muted">You must remember the Raffle Token because it will be asked when picking a winner.</small>
            </div>
            
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}
