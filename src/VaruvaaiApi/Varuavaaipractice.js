import React, { useEffect, useState } from "react";
import apiService from "../API/apiService";
import { useNavigate } from "react-router-dom";

const Varuavaaipractice = () => {

    const[data,setData]=useState("")

useEffect(() => {
    getVaruvaaiApi();
}, [])


  const getVaruvaaiApi = () => {
    var req = {
      showProductImage: 1,
    };
    apiService("product/list", req, "unauthpost")
    .then((result) => {
        setData(result.data.responseModelList)
    }).catch((err) => {
        console.log(err);
        
    });
  };

  const Navi = useNavigate()

 const handleimage = (productId,imageURL)=>{
    Navi(`/Products/${productId}`,{state:{imageURL}})
 }


  return (
    <>
   <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly"}}>
  { data && data.map((a)=>(
     <div key={a.id}>
        <img src={a.imageURL} alt="img"  style={{width:"100px"}} onClick={()=>handleimage(a.productId,a.imageURL)} />
     </div>
  ))}
   </div>
    </>
  );
};

export default Varuavaaipractice;
