import React, { createContext, useState } from 'react'

export const Callcontext = createContext();


const CreateContext = ({children}) => {

    const[name,setName]=useState();

  return (
    <div>
        <h1>Create context Practice</h1>
        <Callcontext.Provider value={{name,setName}}>
            {children}
        </Callcontext.Provider>


    </div>

  )
}

export default CreateContext