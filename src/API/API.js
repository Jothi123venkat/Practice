import { Button, TextField } from "@mui/material";
import React from "react";
import { useForm, useFieldArray } from "react-hook-form";

const FormShow = () => {
  const { register, handleSubmit, control } = useForm();
  const { fields, append } = useFieldArray({
    control,
    name: "variantImages",
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="fields">
        <label>ProductId : </label>
        <TextField type="number" size="small" {...register("productId")} />
      </div>
      <div className="fields">
        <label>ProductName :</label>
        <TextField type="text" size="small" {...register("productName")} />
      </div>
      <div className="fields">
    
        <label>TaxPercent :</label>
        <TextField type="number" size="small" {...register("taxPercent")} />
      </div>
      <div className="fields">
       
        <label>Discount :</label>
        <TextField type="number" size="small" {...register("discount")} />
      </div>
      <div className="fields">
       
        <label>DiscountType :</label>
        <TextField type="text" size="small" {...register("discountType")} />
      </div>
      <div className="fields">
        
        <label>SalePrice :</label>
        <TextField type="number" size="small" {...register("salePrice")} />
      </div>
      <div className="fields">
        
        <label>Description:</label>
        <TextField type="text" size="small" {...register("description")} />
      </div>
      <div className="fields">
        
        <label>MinQty :</label>
        <TextField type="number" size="small" {...register("minQty")} />
      </div>
      <div className="fields">
        
        <label>maxQty :</label>
        <TextField type="number" size="small" {...register("maxQty")} />
      </div>
      <div className="fields">
        
        <label>stockAvl :</label>
        <TextField type="number" size="small" {...register("stockAvl")} />
      </div>
      <div className="fields">
        
        <label>unit :</label>
        <TextField type="number" size="small" {...register("unit")} />
      </div>
      <div className="fields">
        
        <label>brand :</label>
        <TextField type="text" size="small" {...register("brand")} />
      </div>
      <div className="fields">
        
        <label>returnapplicable :</label>
        <TextField type="text" size="small" {...register("returnapplicable")} />
      </div>
      {fields.map((variant, index) => (
        <div key={variant.id}>
          <div className="fields">
            <label>Variant Image ID:</label>
            <TextField
              type="number"
              size="small"
              {...register(`variantImages[${index}].id`)}
            />
          </div>
          <div className="fields">
            <label>Variant Default Image:</label>
            <TextField
              type="number"
              size="small"
              {...register(`variantImages[${index}].defaultImage`)}
            />
          </div>
          <div className="fields">
            <label>Variant Image:</label>
            <TextField
              type="text"
              size="small"
              {...register(`variantImages[${index}].image`)}
            />
          </div>
          <div className="fields">
            <label>Variant Image URL:</label>
            <TextField
              type="text"
              size="small"
              {...register(`variantImages[${index}].imageURL`)}
            />
          </div>
          <div className="fields">
            <label>Variant Image Format:</label>
            <TextField
              type="text"
              size="small"
              {...register(`variantImages[${index}].imageFormat`)}
            />
          </div>
        </div>
      ))}
      <div className="fields">
        <Button
          type="button"
          variant="contained"
          onClick={() =>
            append({
              id: "",
              defaultImage: "",
              image: "",
              imageURL: "",
              imageFormat: "",
            })
          }
        >
          Add Variant Image
        </Button>
      </div>
      <div className="fields">
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default FormShow;