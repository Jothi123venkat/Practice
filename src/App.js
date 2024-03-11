import React from 'react'

import Navss from './CMR/Navss'
import Carousel from './CMR/Swiper/Carosuel'
import Banner from './CMR/Banner'
import Stepper from './Stepper.js/Stepper'
import Dropdown1 from './Dropdown/Dropdown1'
import Dropdownpractice from './Dropdown/Dropdownpractice'
import Getvalues from './Getsetvalues/Getvalues'
// import Main from './Component/Main'
// import {  Route, Routes } from 'react-router-dom'
// import Navigate from './Component/Props/Navigate'
// import Params from './Component/Params/Params'
import Setvalue from './Getsetvalues/Setvalue'
import Apipractics from './PracticeApi/Apipractics'
import Taskprops from './task/Taskprops'
import { Route, Routes } from 'react-router-dom'
import Propsget from './task/Propsget'
import FakeApi from './PracticeApi/FakeApi'

const App = () => {
  return (
    <div>
   {/* <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/Navigate" element={<Navigate/>} />
    <Route path="/Params" element={<Params />} />
    <Route path="/Params/:username" element={<Params />} />

   </Routes> */}

   {/* Outlet */}

  

 {/* <FullRoutes/> */}

{/* <Chartapex/>
<Donut/> */}

{/* <Carosuel/> */}
{/* <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/admin" element={<Nested />}>
        <Route path="/admin/products" element={<Products />} />
        <Route path="/admin/categories" element={<Categories />} />
      </Route>
 </Routes> */}
 {/* <Dashboard/> */}
{/* 
 <Routes>
  <Route path="/" element={<Share />} />
 <Route path="/share2" element={<Share2 />} />

 </Routes> */}

 {/* <Checktabs/> */}
 {/* <Fielduse/> */}
 {/* <Consol/> */}


{/* <Stepper/> */}

{/* CMR imports  */}


{/* <Navss/>
<Banner/>
<Carousel/> */}


{/* <Dropdown1/> */}
{/* <Dropdownpractice/> */}
   
{/* 
<Getvalues/>
<h1>setValue</h1>
<Setvalue/> */}

{/* <Apipractics/> */}


{/* 
<Routes>
  <Route path="/" element={<Taskprops />} />
  <Route path='/gooo' element={<Propsget />} />
</Routes> */}

<FakeApi/>
    </div>
  )
}

export default App