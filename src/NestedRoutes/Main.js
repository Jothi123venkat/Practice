import React from 'react'
import Nav from './Nav'
import Foot from './Foot'
import { Link, Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <div>
    <Nav/>
    <Foot/>
    <Link to="/admin">Admin</Link>
    </div>
  )
}

export default Main
