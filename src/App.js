import React from 'react'
import Main from './Component/Main'
import {  Route, Routes } from 'react-router-dom'
import Navigate from './Component/Props/Navigate'
import Params from './Component/Params/Params'

const App = () => {
  return (
    <div>
   <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/Navigate" element={<Navigate/>} />
    <Route path="/Params" element={<Params />} />
    <Route path="/Params/:username" element={<Params />} />

   </Routes>
   
    </div>
  )
}

export default App