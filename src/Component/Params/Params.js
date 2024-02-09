import React from 'react'
import { useParams } from 'react-router-dom'

const Params = () => {
    const {username} = useParams()
  return (
    <div>
        <h1>{`hi user ${username}`}</h1>
    </div>
  )
}

export default Params