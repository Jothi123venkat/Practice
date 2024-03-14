import React, { useState } from "react";
import apiService from "../API/apiService";
import useDidMountEffect from "../Hooks/useDidMountEffect";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import { Checkbox, FormControlLabel, Grid, TextField } from "@mui/material";
import { Container } from "reactstrap";
import { FileUploader } from "react-drag-drop-files";
import { FaEye } from "react-icons/fa";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Switch from "@mui/material/Switch";
import Heirdialog from "./legalHeirDialogs/Heirdialog";
import { Controller, useForm } from "react-hook-form";

const CmrAccordation1 = () => {
  const [data, setData] = useState();
  const [legalHeirs, setLegalHeir] = useState([]);
  const [victimsdetail, setVictimsdetail] = useState();
  const fileTypes = ["JPG", "PNG", "GIF"];
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("lg");
  const [clickedIndex, setClickedIndex] = useState();
  const [openview, setOpenview] = React.useState(false);
  const [deathCertificateValue, setDeathCertificateValue] = useState(null);
  // view Button States
  // const [viewImage, setViewImage] = useState("");
  const [legalHeirnoc, setLegalHeirnoc] = useState("");
  const [legalHeirselfdeclaration, setLegalHeirselfdeclaration] = useState();

  const { getValues, control, setValue } = useForm();

  // new

  const [documentType, setDocumentType] = useState("");
  const [documentImg, setDocumentImg] = useState("");
  const [imgOpen, setImgOpen] = useState(false);

  const showDocumentImage = (type, imageData) => {
    setDocumentType(type);
    setDocumentImg(imageData);
    setImgOpen(true);
  };

  useDidMountEffect(() => {
    getCmrdetails();
  }, []);

  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };

  const handleClickOpen = (index) => {
    console.log("Clicked index:", index);
    setClickedIndex(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setImgOpen(false);
  };

  const handleViewDocumentOpen = () => {
    setOpenview(true);
  };

  const handleViewDocumentClose = () => {
    setOpenview(false);
  };

  const getCmrdetails = () => {
    apiService("Details", "", "unauthget")
      .then((result) => {
        setData(result.data);
        setVictimsdetail(result.data.victims);
        setLegalHeir(result.data.victims.legalHeirs);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUpload = (event, fieldName, index, fieldid) => {
    console.log(fieldid);
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
            if (fieldName === "LegalHeirnoc") {
              setLegalHeirnoc(logourl);
              setValue(fieldName, logourl);
            } else if (fieldName === "LegalHeirDeclaration") {
              setLegalHeirselfdeclaration(logourl);
              setValue(fieldName, logourl);
            }

            // Store the value in a state variable for later access
            setDeathCertificateValue(logourl);
          };
        }
      }
    }
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>Claim Details</h1>
        <h1>{data && data.claimNumber}</h1>
      </div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          FIR Details
        </AccordionSummary>
        <AccordionDetails>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
            spacing={2}
          >
            <Grid item sm={6} lg={6} xs={12}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "5px",
                }}
              >
                <div>FIR Number</div>
                <div>{data && data.firNumber}</div>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "5px",
                }}
              >
                <div>Accident Date</div>
                <div>{data && data.accidentDate}</div>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "5px",
                }}
              >
                <div>Accident Place</div>
                <div>{data && data.accidentPlace}</div>
              </div>
            </Grid>

            <Grid item sm={6} lg={6} xs={12}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "5px",
                }}
              >
                <div>Police Station Limit</div>
                <div>{data && data.policeStation}</div>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "5px",
                }}
              >
                <div>Accident Time</div>
                <div>{data && data.accidentTime}</div>
              </div>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Victim Details
        </AccordionSummary>
        <AccordionDetails>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
            spacing={2}
          >
            <Grid item sm={6} lg={6} xs={12}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "5px",
                }}
              >
                <div>Name</div>
                <div>{victimsdetail && victimsdetail.name}</div>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "5px",
                }}
              >
                <div>Gender</div>
                <div>{victimsdetail && victimsdetail.gender}</div>
              </div>
            </Grid>

            <Grid item sm={6} lg={6} xs={12}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "5px",
                }}
              >
                <div>Age</div>
                <div>{victimsdetail && victimsdetail.age}</div>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "5px",
                }}
              >
                <div>Nature of inquiry</div>
                <div>{victimsdetail && victimsdetail.injuryType}</div>
              </div>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>

      {/* certificates */}

      <Container>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          sx={{ marginTop: "20px" }}
          spacing={3}
        >
          <Grid item sm={6} lg={6} xs={12}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label htmlFor="legalHair">Legal Heir Certificate Number *</label>
              <div style={{ display: "flex" }}>
                <TextField
                  placeholder={
                    victimsdetail && victimsdetail.legalheirCertificateNumber
                  }
                  fullWidth
                />
                <Button disabled={true} variant="outlined">
                  Verify
                </Button>
              </div>
            </div>

            {/* Aadhar Number */}

            <div style={{ marginTop: "100px" }}>
              <label htmlFor="Aadharnumber">Victim Aadhar Number</label>
              <TextField
                placeholder={victimsdetail && victimsdetail.aadharNumber}
                fullWidth
              />
              <div
                style={{
                  display: "flex",
                  alignItems: "f5pxlex-start",
                  marginTop: "10px",
                }}
              >
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="I provide my consent to Chief Minister's Relief Fund to share my details with the necessary authorities for the purpose of fetching my documents."
                />
              </div>

              {/* Primary mobile number */}

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "15px",
                }}
              >
                <label htmlFor="primarymobile">Primary Mobile Number*</label>
                <TextField
                  name="primarymobile"
                  fullWidth
                  placeholder={victimsdetail && victimsdetail.mobileNumber}
                />
              </div>
            </div>
          </Grid>

          <Grid item sm={6} lg={6} xs={12}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label htmlFor="legalHair">Death Certificate *</label>
              <div style={{ display: "flex", gap: "30px" }}>
                <Controller
                  control={control}
                  name={`victimsdetail.victimdeathCertificateFile`}
                  rules={{
                    required: "Upload Images",
                  }}
                  render={({ field }) => (
                    <FileUploader
                      handleChange={(event) => {
                        handleUpload(event, "LegalHeirnoc");
                        setValue(
                          "LegalHeirnoc",
                          victimsdetail.legalheirSelfdecFile
                        );
                      }}
                      name="Death Certificate"
                      types={fileTypes}
                      label="Death Certificate"
                      {...field}
                    />
                  )}
                />

                <Button
                  variant="contained"
                  onClick={() =>
                    showDocumentImage(
                      "death",
                      victimsdetail.deathCertificateFile
                    )
                  }
                >
                  View Document
                </Button>
              </div>
              <p>The file format should be JPG, JPEG, PNG, or PDF.</p>
              <p>Maximum file size : 5MB</p>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "55px",
              }}
            >
              <label htmlFor="legalHair">Victim Aadhar file *</label>
              <div style={{ display: "flex", gap: "30px" }}>
                <Controller
                  control={control}
                  name={`victimsdetail.aadharFile`}
                  rules={{
                    required: "Upload Images",
                  }}
                  render={({ field }) => (
                    <FileUploader
                      handleChange={(event) => {
                        handleUpload(event, "aadharFile");
                        setValue("LegalHeirnoc", victimsdetail.aadharFile);
                      }}
                      name="aadharFile"
                      types={fileTypes}
                      label="aadharFile"
                      {...field}
                    />
                  )}
                />
                <Button
                  variant="contained"
                  onClick={() =>
                    showDocumentImage("victimaadhar", victimsdetail.aadharFile)
                  }
                >
                  View Document
                </Button>
              </div>

              <p>The file format should be JPG, JPEG, PNG, or PDF.</p>
              <p>Maximum file size : 5MB</p>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                columnGap: "0px",
                marginTop: "15px",
              }}
            >
              <label htmlFor="legalHair">Victim Passport Size Photo *</label>
              <div style={{ display: "flex", gap: "30px" }}>
                <Controller
                  control={control}
                  name={`victimsdetail.victimdeathCertificateFile`}
                  rules={{
                    required: "Upload Images",
                  }}
                  render={({ field }) => (
                    <FileUploader
                      handleChange={(event) => {
                        handleUpload(event, "photoFile");
                        setValue("LegalHeirnoc", victimsdetail.photoFile);
                      }}
                      name="photoFile"
                      types={fileTypes}
                      label="photoFile"
                      {...field}
                    />
                  )}
                />
                <Button
                  variant="contained"
                  onClick={() =>
                    showDocumentImage("passport", victimsdetail.photoFile)
                  }
                >
                  View Document
                </Button>
              </div>

              <p>The file format should be JPG, JPEG, PNG, or PDF.</p>
              <p>Maximum file size : 5MB</p>
            </div>
          </Grid>
        </Grid>
      </Container>

      {/* 2nd accordation  */}
      <h5>Legal Heir's Details</h5>
      <div>
        {legalHeirs &&
          legalHeirs.map((a, index) => (
            <Accordion
              onClick={() => handleClickOpen(index)}
              sx={{ backgroundColor: "#e4e4ff" }}
            >
              <AccordionSummary
                expandIcon={<FaEye style={{ color: "black" }} />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                Enter the Details of Legal Heir : {a.name}
              </AccordionSummary>
            </Accordion>
          ))}

        {/* <Accordion onClick={handleClickOpen}>
          <AccordionSummary
            expandIcon={<FaEye style={{ color: "black" }} />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            legal Heir Details 
          </AccordionSummary>
        </Accordion> */}

        <Dialog
          fullWidth={fullWidth}
          maxWidth={maxWidth}
          open={open}
          onClose={handleClose}
          className="modal"
          PaperProps={{ style: { overflow: "hidden" } }}
        >
          <DialogTitle>
            <Heirdialog
              clickedIndex={clickedIndex}
              legalHeirs={legalHeirs}
              handleClose={handleClose}
              handleClickOpen={handleClickOpen}
            />
          </DialogTitle>
        </Dialog>
      </div>

      {/* legal heir Documents */}

      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={2}
      >
        <Grid item sm={6} lg={6} xs={12}>
          <div>
            <h4 style={{ color: "blue" }}> Legal Heir NOC</h4>
          </div>
          <h4>Legal Heir Noc</h4>
          <div style={{ display: "flex", gap: "10px" }}>
            <Controller
              control={control}
              name="LegalHeirnoc"
              rules={{
                required: "Upload Images",
              }}
              render={({ field }) => (
                <FileUploader
                  handleChange={(event) => {
                    handleUpload(event, "LegalHeirnoc", field.id);
                    setValue(
                      "LegalHeirnoc",
                      victimsdetail.legalheirSelfdecFile
                    );
                  }}
                  name="LegalHeirnoc"
                  types={fileTypes}
                  label="Legal Heir Document"
                  {...field}
                />
              )}
            />

            <Button
              variant="contained"
              onClick={() =>
                showDocumentImage("heirnoc", victimsdetail.legalheirNocFile)
              }
            >
              View Document
            </Button>
          </div>
          <p>The file format should be JPG, JPEG, PNG, or PDF.</p>
        </Grid>
        <Grid item sm={6} lg={6} xs={12}>
          <div>
            <h4>Legal Heir Self Declaration</h4>
          </div>
          <div style={{ display: "flex", marginTop: "60px", gap: "10px" }}>
            <Controller
              control={control}
              name="legalheirSelfdecFile"
              rules={{
                required: "Upload Images",
              }}
              render={() => (
                <FileUploader
                  handleChange={(event) =>
                    handleUpload(event, "legalheirSelfdecFile")
                  }
                  name="upload"
                  types={fileTypes}
                  label="Legal Heir LegalHeirDeclaration"
                />
              )}
            />
            <Button
              variant="contained"
              onClick={() =>
                showDocumentImage(
                  "heirselfdec",
                  victimsdetail.legalheirSelfdecFile
                )
              }
            >
              View Document
            </Button>
          </div>
          <p>The file format should be JPG, JPEG, PNG, or PDF.</p>
        </Grid>
      </Grid>

      {/*common View Document modal  */}
      <Dialog
        open={imgOpen}
        onClose={handleClose}
        // fullWidth={fullWidth}
        // maxWidth={maxWidth}
      >
        {documentType === "death" && (
          <img
            src={`data:image/png;base64,${documentImg}`}
            alt="Document"
            style={{ width: "100%", maxWidth: "550px" }}
          />
        )}

        {documentType === "victimaadhar" && (
          <img
            src={`data:image/png;base64,${documentImg}`}
            alt="Document"
            style={{ width: "100%", maxWidth: "550px" }}
          />
        )}

        {documentType === "passport" && (
          <img
            src={`data:image/png;base64,${documentImg}`}
            alt="Document"
            style={{ width: "100%", maxWidth: "550px" }}
          />
        )}

        {documentType === "heirnoc" && (
          <img
            src={`data:image/png;base64,${documentImg}`}
            alt="Document"
            style={{ width: "100%", maxWidth: "550px" }}
          />
        )}

        {documentType === "heirselfdec" && (
          <img
            src={`data:image/png;base64,${documentImg}`}
            alt="Document"
            style={{ width: "100%", maxWidth: "550px" }}
          />
        )}
      </Dialog>

      {/* Bank Account Details */}

      <div>
        <h4 style={{ color: "blue" }}>Bank Account Details</h4>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={2}
        >
          <Grid item sm={4} lg={4} xs={12}>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              {/* <TextField label={data.bankAccountNumber} type="password" fullWidth/> */}
              {/* <TextField label={data && data.bankAccountIfsc} fullWidth /> */}
            </div>
          </Grid>

          <Grid item sm={4} lg={4} xs={12}>
            {/* <TextField label={ data && data.bankAccountNumber}  fullWidth /> */}
          </Grid>

          <Grid item sm={4} lg={4} xs={12}>
            {/* <TextField label={data && data.bankAccountHolderName} fullWidth /> */}
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default CmrAccordation1;
