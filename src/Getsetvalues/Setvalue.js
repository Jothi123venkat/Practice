import React from 'react'
import { useForm } from 'react-hook-form'

const Setvalue = () => {
    const{register,setValue}=useForm()
  return (
    <div>
      <form >
       <input {...register("fullname")} name='fullname'/>

       <button type="button" onClick={() => setValue("fullname", "venkat")}>
        setValue
      </button>
      </form>
    </div>
  )
}

export default Setvalue
