import React from 'react'

const Details = (props) => {
    // Destructure the props
    const{Name,Age} = props
    // console.log(props);
  return (
    <div>
        <p>Name :{Name}</p>
        <p>Age : {Age}</p>
    </div>
  )
}

export default Details