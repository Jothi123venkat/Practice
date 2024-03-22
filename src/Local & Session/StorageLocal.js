import React from 'react'

const StorageLocal = () => {
      
   localStorage.setItem("name","venkat")
  return (
    <div>

     <h1> {localStorage.getItem("name")}</h1>

    </div>
  )
}

export default StorageLocal