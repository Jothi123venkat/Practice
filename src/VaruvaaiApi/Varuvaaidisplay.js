import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import apiService from "../API/apiService";
import useDidMountEffect from "../Hooks/useDidMountEffect";

const Varuvaaidisplay = () => {
  const [data, setData] = useState(null);
  const [variant, setVariant] = useState(null);
  const[threeimages,setThreeImages]=useState(null)

  useDidMountEffect(() => {
    // getimagebyid();
    getVariantApi();
  }, []);

  const { productId } = useParams();

  //   const getimagebyid = () => {
  //     apiService(`product/ ${productId}`, null, "unauthget")
  //       .then((result) => {
  //         setData(result.data);
  //       })
  //       .catch((err) => {});
  //   };

  const getVariantApi = () => {
    var req = {
      productId: productId,
      listSize: 10,
      pageNumber: 1,
    };
    apiService("product/variants/list", req, "unauthpost")
      .then((result) => {
        setVariant(result.data.responseModelList, "getvarainatlist");
        result.data.responseModelList.forEach((element) => {
          if (element.defaultVariant === 1) {
            setThreeImages(element.variantImages)   
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {/* <img src={data.imageURL} alt="img" style={{ width: "400px" }} /> */}
      {/* <h1>{data.productId}</h1> */}
    </div>
  );
};

export default Varuvaaidisplay;
