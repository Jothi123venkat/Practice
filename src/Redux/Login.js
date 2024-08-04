import React, { useState } from 'react'
import {login} from './features/User.js'
import { useDispatch } from 'react-redux'
const Login = () => {
 const [name,setName]=useState();
 const[age,setAge]=useState();
 const[email,setEmail]=useState();


    const dispatch = useDispatch();
    const handlelogin =()=>{
        dispatch(login({
            name:name,
            age:age,
            email:email
        })) 
        setName("");
        setEmail("");
        setAge("");
    }

     const handlelogout =()=>{
        dispatch(login({
            name:"",
            age:"age is empty",
            email:""
        }))
     }
  return (
    <div>
     
     <input type="text"   value={name} onChange={(e)=>setName(e.target.value)} placeholder='Name'/>
     <input type="text"   value={age} onChange={(e)=>setAge(e.target.value)}  placeholder='age'/>
     <input type="text"   value={email} onChange={(e)=>setEmail(e.target.value)}  placeholder='email'/>

        <button onClick={ handlelogin}>Login</button>
        <button onClick={ handlelogout}>Logout</button>
    </div>
  )
}

export default Login