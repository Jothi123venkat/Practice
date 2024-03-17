import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const DisplayactorImages = () => {
    const {id} =useParams()
     
  const takelocation = useLocation();

    const datas = takelocation?.state?.imageLink

  return (
    <div>
  <h1>{id}</h1>

  <img src={datas} alt="img"  style={{width:"100px"}}/>

    </div>
  )
}

export default DisplayactorImages