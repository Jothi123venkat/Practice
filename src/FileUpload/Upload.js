import React, { useState } from "react";
import { Button, FormLabel } from "@mui/material";
import { FileUploader } from "react-drag-drop-files";
import { Controller, useForm } from "react-hook-form";

const ImgUpload = () => {
  const [viewImage, setViewImage] = useState("");
  const [viewImage1, setViewImage1] = useState("");
  const [showImageView, setShowImageView] = useState(false);
  const [showImageView1, setShowImageView1] = useState(false);
  const [closeBtn, setCloseBtn] = useState(false); 
  const [closeBtn1, setCloseBtn1] = useState(false); 

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    control,
    formState: { errors },
  } = useForm();

  const fileTypes = ["JPG", "PNG", "GIF"];

  const handleUpload = (event, fieldName) => {
    if (event !== null) {
      const logoselectedFile =
        event.target === undefined ? event : event.target.files[0];

      if (logoselectedFile) {
        var reader = new FileReader();
        var imagetype = logoselectedFile.type;
        var imagedatatype = imagetype.split("/");
        var img_crt_type = imagedatatype[1];
        if (
          img_crt_type === "jpeg" ||
          img_crt_type === "jpg" ||
          img_crt_type === "png"
        ) {
          var fileValue = logoselectedFile;
          reader.readAsDataURL(logoselectedFile);
          reader.onload = () => {
            var logourl = reader.result;
            var spl = logourl.split(",");
            var ImageValue = spl[1];
            var img_name = fileValue.name;
            if (fieldName === "upload") {
              setViewImage(logourl);
              setValue(fieldName, logourl);
            } else if (fieldName === "upload1") {
              setViewImage1(logourl);
              setValue(fieldName, logourl);
            }
          };
        }
      }
    }
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleShowImage = (fieldName) => {
    if (fieldName === "upload") {
      setShowImageView(true);
      setCloseBtn(true);
    } else if (fieldName === "upload1") {
      setShowImageView1(true);
      setCloseBtn1(true);
    }
  };

  const handleClosebtn = () => {
    setShowImageView(false);
    setCloseBtn(false);
  };

  const handleClosebtn1 = () => {
    setShowImageView1(false);
    setCloseBtn1(false);
  };

  return (
    <div>
      <FormLabel>Aadhar Card</FormLabel>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Controller
          control={control}
          name="upload"
          rules={{
            required: "Upload Images",
          }}
          render={() => (
            <FileUploader
              handleChange={(event) => handleUpload(event, "upload")}
              name="upload"
              types={fileTypes}
              label="Aadhar Upload"
            />
          )}
        />

        {getValues("upload") && closeBtn ? (
          <Button
            type="submit"
            variant="contained"
            sx={{ marginLeft: "5px" }}
            onClick={handleClosebtn}
          >
            Close
          </Button>
        ) : (
          <Button
            type="submit"
            variant="contained"
            sx={{ marginLeft: "5px" }}
            onClick={() => handleShowImage("upload")}
          >
            View Document
          </Button>
        )}
      </div>
      {errors.upload && (
        <span style={{ color: "red" }}>{errors.upload.message}</span>
      )}

      <div style={{ display: "flex", alignItems: "center" }}>
        <Controller
          control={control}
          name="upload1"
          rules={{
            required: "Upload Images",
          }}
          render={() => (
            <FileUploader
              handleChange={(event) => handleUpload(event, "upload1")}
              name="upload1"
              types={fileTypes}
            />
          )}
        />
        {getValues("upload1") && closeBtn1 ? (
          <Button
            type="submit"
            variant="contained"
            sx={{ marginLeft: "5px" }}
            onClick={handleClosebtn1}
          >
            Close
          </Button>
        ) : (
          <Button
            type="submit"
            variant="contained"
            sx={{ marginLeft: "5px" }}
            onClick={() => handleShowImage("upload1")}
          >
            View Document
          </Button>
        )}
      </div>
      {errors.upload1 && (
        <span style={{ color: "red" }}>{errors.upload1.message}</span>
      )}

      <div style={{display:'flex', marginTop:'50px', gap:'20px'}}>
      {showImageView && getValues("upload") && (
        <div>
          <div>
            <img
              src={viewImage}
              alt="Uploaded"
              style={{ width: "100%", maxWidth: "300px" }}
            />
          </div>
        </div>
      )}
      {showImageView1 && getValues("upload1") && (
        <div>
          <div>
            <img
              src={viewImage1}
              alt="Uploaded"
              style={{ width: "100%", maxWidth: "300px" }}
            />
          </div>
        </div>
      )}
      </div>

     
    </div>
  );
};

export default ImgUpload;