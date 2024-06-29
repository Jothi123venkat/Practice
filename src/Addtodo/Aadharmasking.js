import React, { useState } from 'react';
import { useForm, Controller, get } from 'react-hook-form';

const Aadharmasking = () => {
  const { control, handleSubmit, setValue, getValues, formState: { errors } } = useForm();

  const [masked, setMasked] = useState("");
  const [input, setInput] = useState("");
  const[add,setAdd]=useState("");
  const[todo,setTodo]=useState([]);


  const onSubmit = (data) => {
    console.log(data);
  };

  const handleBlur = (event) => {
    const value = event.target.value;
    setInput(value);
    if (value.length >= 8) {
      const maskedValue = '********' + value.slice(8);
      setValue('aadharNumber', maskedValue);
      setMasked(maskedValue);
    }
  };

  const handleFocus = () => {
    const currentValue = getValues('aadharNumber');
    if (currentValue.startsWith('********')) {
      setValue('aadharNumber', input);

    }
  };

  const handlepressenter = (e)=>{
  
     if(e.key === "Enter"){
         handleSubmit(onsubmit)
         setValue("aadharNumber","")
     }
  }

  console.log(add);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="aadharNumber"
          control={control}
          defaultValue=""
          rules={{
            required: 'Aadhar number is required',
            pattern: {
              value: /^\d{12}$/,
              message: 'Invalid Aadhar number'
            }
          }}
          render={({ field }) => (
            <div>
              <input
                {...field}
                type="text"
                placeholder="Enter Aadhar number"
                onBlur={handleBlur}
                onFocus={handleFocus}
                onKeyPress={handlepressenter}
              />
              {errors.aadharNumber && (
                <p>{errors.aadharNumber.message}</p>
              )}
            </div>
          )}
        />
        <button type="submit">Submit</button>
      </form>

      
    </div>
  );
};

export default Aadharmasking;
