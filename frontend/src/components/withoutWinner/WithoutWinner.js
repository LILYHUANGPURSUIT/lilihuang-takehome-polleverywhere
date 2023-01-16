import React from 'react'
import "./withoutWinner.css"

export const WithoutWinner = () => {
  return (
    <div className='noWinner'>
        <h2>Pick a Winner</h2>
        <input type="text" id="secretTokenToWin"placeholder='Secret token'/>
    </div>
  )
}
