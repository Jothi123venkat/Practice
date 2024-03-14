import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import apiService from '../API/apiService'
import useDidMountEffect from '../Hooks/useDidMountEffect'

const Showimageparms = () => {
    const{id}=useParams()
   const[show,setShow]=useState(null)

   useDidMountEffect(() => {
    showid()
    
  }, [])
  

   const showid = ()=>{
    apiService(`actors/ActorsImages.json/${id}`,'',"unauthget")
    .then((result) => {
        setShow(result.data);
        console.log(result.data);
    }).catch((err) => {
      console.log(err);
    });
 }

  return (
    <div>
    {show && (
        <div>
            <h1>{show.Name}</h1>
            <img src={show.imageURL} alt="Actor" style={{ width: "100px" }} />
        </div>
    )}
</div>
  )
}

export default Showimageparms