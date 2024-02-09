import React, { useContext } from 'react'
import { Callcontext } from './CreateContext'

const Usename = () => {
 const {name}=useContext(Callcontext)

  return (
    <div>Name :{name}</div>
  )
}

export default Usename