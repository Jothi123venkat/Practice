import React, { useEffect, useLayoutEffect } from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";

function Prac4() {
  const { register, control, handleSubmit, reset, trigger, setError } = useForm(
    {}
  );
  const { fields, append, remove } = useFieldArray({
    control,
    name: "test",
  });

// useEffect(() => {
     
    if(fields.length === 0 ){
        append()
    }
// }, [])

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <ul>
        {fields.map((item, index) => (
          <li key={item.id}>
            <input {...register(`test.${index}.firstName`)} />
            <Controller
              render={({ field }) => <input {...field} />}
              name={`test.${index}.lastName`}
              control={control}
            />
            <button type="button" onClick={() => remove(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={() => append()}
      >
        append
      </button>
      <input type="submit" />
    </form>
  );
}

export default Prac4;
