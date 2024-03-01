import { TextField } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';

const Consol = () => {
  const { register, handleSubmit } = useForm();

  const fullNameRef = React.useRef(null);
  const emailRef = React.useRef(null);
  const numberRef = React.useRef(null);
  const mobileNumRef = React.useRef(null);

  const submit = (data) => {
    console.log(data);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      switch (e.target.name) {
        case 'fullname':
          emailRef.current.focus();
          break;
        case 'email':
          numberRef.current.focus();
          break;
        case 'number':
          mobileNumRef.current.focus();
          break;
        default:
          // Do nothing or submit the form
          break;
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <TextField
          type="text"
          {...register('fullname')}
          name="fullname"
          placeholder="Name"
          inputRef={fullNameRef}
          onKeyDown={handleKeyPress}
        />
        <TextField
          type="email"
          {...register('email')}
          name="email"
          placeholder="Email"
          inputRef={emailRef}
          onKeyDown={handleKeyPress}
        />
        <TextField
          type="number"
          {...register('number')}
          name="number"
          placeholder="Number"
          inputRef={numberRef}
          onKeyDown={handleKeyPress}
        />
        <TextField
          type="tel"
          {...register('Mobilenum')}
          name="Mobilenumber"
          placeholder="Mobile Number"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          inputRef={mobileNumRef}
          onKeyDown={handleKeyPress}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Consol;
