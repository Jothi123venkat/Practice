import React, {  createContext, useState } from "react";
// first of all import and export the usecontext
export const Appcontext = createContext();

const Contextuse = ({children}) => {
  // and then Pass a Parameter as a children
  const [name, setName] = useState('');


  return (
    <div className="context">
      <div>
        
        <div><h1>useContext Hook </h1></div>
        <h1>Always Success</h1>
         <Appcontext.Provider value={{name,setName}}>
          {children}
         </Appcontext.Provider>
      </div>
    </div>
  );
};

export default Contextuse;
