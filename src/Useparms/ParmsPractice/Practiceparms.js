import React, { useEffect, useState } from "react";
import apiService from "../../API/apiService";
import { useNavigate } from "react-router-dom";

const Practiceparms = () => {
  const [images, setImages] = useState("");

  useEffect(() => {
    Actorsapi();
  }, []);

  const navi = useNavigate();

  const Actorsapi = () => {
    apiService("ActorsImages.json", null, "unauthget")
      .then((result) => {
        setImages(result.data.ActorsImages);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleimageclick = (valueid,imageLink) => {
    console.log(valueid);
    console.log(imageLink,"imagelink");
    navi(`/Actors/${valueid}` ,{state:{imageLink}});
  };

  return (
    <div style={{ display: "flex" }}>
      {images &&
        images.map((a, i) => (
          <ul key={a.id}>
            <li>{a.Name}</li>
            <img
              src={a.imageURL}
              alt="img"
              style={{ width: "100px" }}
              onClick={() => handleimageclick(a.id,a.imageURL)}
            />
          </ul>
        ))}
    </div>
  );
};

export default Practiceparms;
