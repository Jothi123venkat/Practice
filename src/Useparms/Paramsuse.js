import React, { useState } from 'react'
import apiService from '../API/apiService'
import useDidMountEffect from '../Hooks/useDidMountEffect'
import { useNavigate } from 'react-router-dom'

const Paramsuse = () => {

  const[data,setData]=useState("")

  const navi =useNavigate()
   
  useDidMountEffect(() => {
    handleActorsimages()
  }, [])
  

  const handleActorsimages = ()=>{
     apiService("actors/ActorsImages.json",null,"unauthget")
     .then((result) => {
      setData(result.data.ActorsImages)
     }).catch((err) => {
       console.log(err);
     });
  }

  const handleImageclick =(id)=>{
    navi(`/parms/${id}`)
  }

  return (
    <div style={{display:"flex"}}>

      {data && data.map((a)=>(
        <ul key={a.id}>
          <li>{a.Name}</li>
          <img src={a.imageURL} alt="img" style={{width:"100px"}} onClick={()=>handleImageclick(a.id)} />
        </ul>
      ))}

    </div>
  )
}

export default Paramsuse