import React, { useEffect, useState } from "react";
import apiService from "../API/apiService";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import useDidMountEffect from "../Hooks/useDidMountEffect";

const FakeApi = () => {
  const [data, setData] = useState();
  const [vijaymovies, setVijaymovies] = useState();
  const [selectedmovie, setSelectedmovie] = useState();

  useDidMountEffect(() => {
    actorsApi();
    VijayfullMovies();
  }, []);

  const actorsApi = () => {
    apiService("actors/SampleApi.json", null, "unauthget")
      .then((result) => {
        setData(result.data.maleactors[1].movies);
        console.log(result.data.maleactors[0].movies);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const VijayfullMovies = () => {
    apiService("actors/VijayMovies.json", null, "unauthget")
      .then((result) => {
        setVijaymovies(result.data.vijay_movies);
        console.log(result.data.vijay_movies, "VijayMovies");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleleoClick = (clickedvalue) => {
    if (clickedvalue) {
      alert(`${clickedvalue.title} movie released in ${clickedvalue.year} `);
      setSelectedmovie(clickedvalue.title);
      console.log(clickedvalue.title);
    }
  };

  return (
    <div>
      <div>
        {data &&
          data.map((a, i) => (
            <ul key={i}>
              <li>MovieName:{a.moviename}</li>
              <li>Collection :{a.collection}</li>
              <li>Verdict :{a.verdict}</li>
            </ul>
          ))}
      </div>

      <div>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          getOptionLabel={(option) => option.title}
          onChange={(event, value) => handleleoClick(value)}
          options={vijaymovies}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Movie" />}
        />
      </div>
      {selectedmovie && <h1>{selectedmovie}</h1>}
      <div></div>
    </div>
  );
};

export default FakeApi;