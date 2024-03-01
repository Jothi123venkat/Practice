import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layouts from './Layouts'
import Home from './RoutesFIle/Home'
import Aboutus from './RoutesFIle/Aboutus'
import New from './New'

const FullRoutes = () => {
  return (
    <div>
     <Routes>
        <Route path="/" element={<Layouts />} >
        <Route path="/" element={<Home/>} />
        <Route path="/new" element={<New/>} />
        </Route>
     </Routes>
     
    </div>
  )
}

export default FullRoutes
