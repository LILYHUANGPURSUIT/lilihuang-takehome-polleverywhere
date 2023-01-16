import React from 'react'
import { WithoutWinner } from '../../components/withoutWinner/WithoutWinner'
import { WithWinner } from '../../components/withWinner/WithWinner'

export const Winner = () => {
  return (
    <div>
        <WithoutWinner />

        <WithWinner />
    </div>
  )
}
