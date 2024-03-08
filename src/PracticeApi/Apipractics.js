
import React, { useEffect, useState } from "react";
import apiService from "../API/apiService";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useForm } from "react-hook-form";

const Apipractics = () => {
  const { register, getValues, setValue } = useForm();
  const [countries, setCountries] = useState([]);
  const [countryPopulations, setCountryPopulations] = useState([]);

  useEffect(() => {
    handleapi();
  }, []);

  const handleapi = () => {
    apiService("countries", "", "unauthget")
      .then((result) => {
        console.log(result.data);
        setCountries(result.data);
      })
      .catch((err) => {});
  };

  const handlecountrieschange = (e, selectedvalue) => {
    setValue("Countries",selectedvalue);
    setCountryPopulations(selectedvalue && [selectedvalue])
  };

  return (
    <div style={{ marginTop: "40px", display: "flex", gap: "20px" }}>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        {...register("Countries")}
        getOptionLabel={(a) => a.name}
        options={countries}
        onChange={handlecountrieschange}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Movie" />}
      />

      {getValues("Countries") && (
          <Autocomplete
          disablePortal
          id="combo-box-demo"
          {...register("population")}
          getOptionLabel={(a) => a.population}
          options={countryPopulations}
          onChange={handlecountrieschange}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="population" />}
        />
      )}

{getValues("population") && (
        <h1>Autocomplete</h1>)}
    </div>
  );
};

export default Apipractics;
