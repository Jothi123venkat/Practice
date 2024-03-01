import React, { useLayoutEffect, useState } from 'react';
import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Share = () => {
  const [value, setValue] = useState('');
  const [storevalue,setStorevalue]=useState([])   
  const navigate = useNavigate();

  const handleClick = () => {
    if (value.trim() !== '') { 
      navigate('/share2', { state: { value } });
      setStorevalue([value])
      console.log(storevalue);
    }
  };

  // useLayoutEffect(() => {
  
  //   return () => {
  //       const text = "    v i j ay";
  //       //   trim does not take the first space before the word starts
  //         let result = text.trim()
  //       console.log(result);   
  //   };
  // }, [])


  return (
    <div>
      <TextField
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
       <TextField
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button onClick={handleClick}>Submit</Button>
    </div>
  );
};

export default Share;
