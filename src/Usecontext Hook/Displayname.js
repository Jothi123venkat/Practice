import React, { useContext } from 'react'
import { Appcontext } from './Contextuse'


const Displayname = () => {
    const{name}=useContext(Appcontext)
 
  return (
    <div>
        Name : {name}
    </div>
  )
}

export default Displayname