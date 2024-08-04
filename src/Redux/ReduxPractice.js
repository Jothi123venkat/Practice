import React from 'react'
import Profile from './Profile'
import Login from './Login'

const ReduxPractice = () => {
    // pass a data between two siblings
    // thats why we use redux

    // first step create a store in index.js
    
    
  return (
    <div  style={{ display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",flexDirection:"column"}}>
        <Profile/>
        <Login/>
    </div>
  )
}

export default ReduxPractice