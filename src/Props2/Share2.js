import React from 'react'
import { useLocation } from 'react-router-dom'

const Share2 = () => {
    

const location =useLocation()
console.log(location,"location");

const datas = location.state.value;
const storedata =[...datas]
  return (
    <div>
   <h1>{datas}</h1>
   <h1>{storedata}</h1>
    </div>
  )
}

export default Share2
