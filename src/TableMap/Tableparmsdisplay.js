import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const Tableparmsdisplay = () => {
    const{id} =useParams()
    const getLocation  =useLocation();
  
    const datas = getLocation?.state?.valueimage


  return (
    <div>
       <h1>{id}</h1>
    <img src={datas} alt="img" style={{width:"100px"}} />
    </div>
  )
}

export default Tableparmsdisplay
