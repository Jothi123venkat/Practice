import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navigate = () => {
  const Navi = useNavigate()
  return (
    <div>
      <button onClick={()=>Navi('/')}>Go TO home</button>
    </div>
  )
}

export default Navigate