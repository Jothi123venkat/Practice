import React, { useState } from 'react'

const Prep = () => {

  const name = "hi,there,iam,vijay "

const reverseastring = (num)=>{
   return num.split("").reverse()
}

const [stringreverse,setStringreverse]= useState("");
const[originalstring,setOriginalstring]=useState("hiheelo")
const reversewithowtmethod  =(str)=>{
    let reversed =""
    for(let originalstring =str.length-1;originalstring >=0;originalstring--){
     reversed =  reversed+str[originalstring];
    }
  
    return reversed;
}

// const reverseWithoutMethod = (str) => {
//     let reversed = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//       reversed += str[i];
//     }
//     return reversed;
//   };


 const array = [1,2,3,4,5]
 const string = "ajith"

  return (
    <div>
        {/*  replace method */}
        {name.replace("vijay","ajith")} 

        <br />

       {/*   exmaple of join */}
       {/*  A best exaxmple for join is an array */}
        {array.join("")}

         <br />
      {/*  split mehhod */}
       {name.split(",")}
   <br />

         {/* reverse method */}
         { reverseastring("ajith")}

         {/*  revese a string without using reverse method */}




    </div>
  )
}

export default Prep