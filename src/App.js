import React from "react";

import Navss from "./CMR/Navss";
import Carousel from "./CMR/Swiper/Carosuel";
import Banner from "./CMR/Banner";
import Stepper from "./Stepper.js/Stepper";
import Dropdown1 from "./Dropdown/Dropdown1";
import Dropdownpractice from "./Dropdown/Dropdownpractice";
import Getvalues from "./Getsetvalues/Getvalues";
// import Main from './Component/Main'
// import {  Route, Routes } from 'react-router-dom'
// import Navigate from './Component/Props/Navigate'
// import Params from './Component/Params/Params'
import Setvalue from "./Getsetvalues/Setvalue";
import Apipractics from "./PracticeApi/Apipractics";
import Taskprops from "./task/Taskprops";
import { Link, Route, Routes } from "react-router-dom";
import Propsget from "./task/Propsget";
import FakeApi from "./PracticeApi/FakeApi";
import Upload from "./FileUpload/Upload";
import Upload2 from "./FileUpload/Upload2";
import Params from "./Component/Params/Params";
import Paramsuse from "./Useparms/Paramsuse";
import Showimageparms from "./Useparms/Showimageparms";
import TaskCmr from "./CMRTask/TaskCmr";
import "./App.css";
import Practiceparms from "./Useparms/ParmsPractice/Practiceparms";
import DisplayactorImages from "./Useparms/ParmsPractice/DisplayactorImages";
import TableMap from "./TableMap/TableMap";
import Tableparmsdisplay from "./TableMap/Tableparmsdisplay";
import Control from "./Controllerr/Control";
import Sentavalue from "./SentValueButton/Sentavalue";
import Buttonsent from "./Buttonsent/Buttonsent";
import Count from "./Count/Count";
import Varuavaaipractice from "./VaruvaaiApi/Varuavaaipractice";
import Varuvaaidisplay from "./VaruvaaiApi/Varuvaaidisplay";
import StorageLocal from "./Local & Session/StorageLocal";
import HomePage from "./FIreBase Auth/HomePage";
import Login from "./FIreBase Auth/Login";
import Register from "./FIreBase Auth/Register";
import Loginsuccess from "./FIreBase Auth/Loginsuccess";
import Logins from "./Firebase_ui/Logins";
import Design from './Varuvaaidesignlogin/Design'
import LoginOk from "./Varuvaaidesignlogin/OtpLogin/LoginOk";
import Practice from "./Summa/Practice";
import Tanfundesign from "./Summa/Tanfundesign";
import Sidebarhome from "./Sidebar/Sidebarhome";
import Add from "./Addtodo/Add";
import Aadharmasking from "./Addtodo/Aadharmasking";
import Prep from "./Prep/Prep";
import Prac from "./Prac/Prac";
import Pract3 from "./Prac section/Pract3";
import Grid from "./Prac section/Grid";
import Prac4 from "./Prac section/Prac4";
import Method from "./Method/Method";
import Referencs from "./Useref/Referencs";


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
      {/* API */}
      {/* <FakeApi/> */}

      {/*file Upload in CMARf  */}
      {/* 2 file upload indigivual upload and close */}
      {/* <Upload/>   */}
      {/* for Practise */}
      {/* <Upload2/> */}

      {/* <Routes>
        <Route path="/" element={<Paramsuse />} />
        <Route path="/parms/:id" element={<Showimageparms />} />
      </Routes> */}

      {/* Realtime working Task Run Json-server before running Taskcmr */}

      {/* <TaskCmr/> */}

      {/* useparms clear Example */}

      {/* <Routes>
  <Route path="/" element={<Practiceparms />} />
  <Route path="/Actors/:id" element={<DisplayactorImages/>} />
 </Routes> */}

      {/* How to Display map a data in table */}

      {/* <Routes>
  <Route path="/" element={<TableMap />} />
  <Route path="/Table/:id" element={<Tableparmsdisplay />} />
 </Routes>
  */}

      {/* Validation Controller */}
   {/* <Control/> */}

  {/* how to sent a value by index */}

  {/* <Sentavalue/> */}

  {/* how to sent a value in button */}

  {/* <Buttonsent/> */}

  {/* <Count/> */}

{/* varuvaai API practice */}

{/* <Routes>
  <Route path="/" element={<Varuavaaipractice />} />
  <Route path="/Products/:productId" element={<Varuvaaidisplay />} />
</Routes> */}

{/* local storage & Session storage */}
{/* <StorageLocal/> */}

{/* firebase Auth */}

{/* <div style={{display:"flex",justifyContent:"space-between",backgroundColor:"#9ad3e2",textDecoration:"none"}}>
<Link to="/" style={{textDecoration:"none"}}>Homepage</Link> <br />
<Link to="/Login" style={{textDecoration:"none"}}>Login</Link>  <br />
<Link to="/register" style={{textDecoration:"none"}}>Register</Link>
</div> */}
{/* login important */}
{/* <Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/Login" element={<Login />} />
  <Route path="/register" element={<Register />} />
  <Route path="/LoginSuccess" element={<Loginsuccess />} />
</Routes> */}


 {/* <Routes>
  <Route path="/" element={<Logins />} />
  <Route path="/LoginSuccess" element={<Loginsuccess />} />
 </Routes>
  */}

{/* <Routes>
    <Route path="/" element={<Design />} />
    <Route path="/Login" element={<LoginOk />} />
  </Routes> */}


{/* <Practice/> */}

{/* <Tanfundesign/> */}

{/* <Sidebarhome/> */}

{/* varuvaai design */}
{/* <Design/> */}

{/* <Add/> */}
{/* <Prep/> */}
{/* <Aadharmasking/> */}

{/* <Prac/> */}

{/* <Pract3/> */}

{/* <Grid/> */}
{/* <Prac4/> */}
{/* <Method/> */}
 <Referencs/>
    </div>
  );
};

export default App;
