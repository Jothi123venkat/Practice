import React from 'react'
import Navs from './Navs'
import Foots from './Foots'
import { Outlet } from 'react-router-dom'

const Layouts = () => {
  return (
    <div>
        <Navs/>
        <Outlet></Outlet>
        <Foots/>
    </div>
  )
}

export default Layouts
