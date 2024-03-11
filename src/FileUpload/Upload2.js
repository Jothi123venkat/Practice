import { Button } from "@mui/material";
import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { Controller, useForm } from "react-hook-form";

const Upload2 = () => {
  const fileTypes = ["JPG", "PNG", "GIF"];
  const [viewImage, setViewImage] = useState("");
  const [showImage, setShowImage] = useState(false);
  const {
    setValue,
    handleSubmit,
    formState: { errors },
    control,
    getValues,
  } = useForm();

  const handleUploads = (event) => {
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
            var logourl1 = reader.result;
            var spl = logourl1.split(",");
            var ImageValue = spl[1];
            var img_name = fileValue.name;
            setViewImage(logourl1);
            setValue("upload", logourl1);
          };
        }
      }
    }
  };

  const handleclickshow = () => {
    setShowImage(true);
  };

  return (
    <div>
      <div>
        <Controller
          control={control}
          name="Upload"
          rules={{ required: "Please Upload a Image" }}
          render={() => (
            <FileUploader
              handleChange={handleUploads}
              name="file"
              types={fileTypes}
            />
          )}
        />

        <Button type="submit" variant="contained" onClick={handleclickshow}>
          Show a Document
        </Button>
      </div>

      <div>
        <Controller
          control={control}
          name="Upload"
          rules={{ required: "Please Upload a Image" }}
          render={() => (
            <FileUploader
              handleChange={handleUploads}
              name="file"
              types={fileTypes}
            />
          )}
        />

        <Button type="submit" variant="contained" onClick={handleclickshow}>
          Show a Document
        </Button>
      </div>
    </div>
  );
};

export default Upload2;
