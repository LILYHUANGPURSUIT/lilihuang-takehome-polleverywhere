import React from 'react'
import { WithoutWinner } from '../../components/withoutWinner/WithoutWinner'
import { WithWinner } from '../../components/withWinner/WithWinner'

export const Winner = () => {
  return (
    <div>
        <h1>No winner yet</h1>
        <WithoutWinner />

        <h2>if winner existed, display the info of winner</h2>
        <WithWinner />
    </div>
  )
}
