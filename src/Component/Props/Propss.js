import React from 'react'
import Details from './Details'

const Propss = () => {

  const EmployeeInfo =[
    {
      Name:"venkat",
      Age:21
    },{
      Name:"vijay",
      Age:50
    },{
      Name:"ajith",
      Age:52

    }
  ]

  return (
    <div>
     
     {
       EmployeeInfo && EmployeeInfo.map((info)=>{
          return(
            <Details {...info}/>
          )
       })
     }
    

    </div>
  )
}

export default Propss