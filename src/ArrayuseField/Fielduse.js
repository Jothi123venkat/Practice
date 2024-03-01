import React from 'react'
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { TextField } from '@mui/material';

const Fielduse = () => {
  const { register, control, handleSubmit, } = useForm({
    // defaultValues: {}; you can populate the fields by this attribute 
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "test"
  });
  return (
    <div>
       <form onSubmit={handleSubmit(data => console.log(data))}>
      <ul>
        {fields.map((item, index) => (
          <li key={item.id}>
            <TextField {...register(`test.${index}.firstName`)} />
            <Controller
              render={({ field }) => <TextField {...field} />}
              name={`test.${index}.lastName`}
              control={control}
            />
            <button type="button" onClick={() => remove(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={() => append({ firstName: "bill", lastName: "luo" })}
      >
        append
      </button>
      <input type="submit" />
    </form>
    </div>
  )
}

export default Fielduse
