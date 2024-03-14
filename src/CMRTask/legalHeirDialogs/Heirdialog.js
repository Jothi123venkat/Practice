import { Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';

const Heirdialog = ({ clickedIndex, legalHeirs,handleClose }) => {
  const fileTypes = ["JPG", "PNG", "GIF"];
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };


  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('lg');

  const handleClickOpen = () => {
    setOpen(true);
  };

  // const handleClose = () => {
  //   setOpen(false);
  // };


  return (
    // <div>{legalHeirs[clickedIndex].name}</div>

    <div>
      <h1>Legal Heir Details</h1>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={5}
      >
        <Grid item sm={6} lg={6} xs={12}>
          <div style={{ marginTop: "20px" }}>
            <TextField
              disabled
              id="outlined-disabled"
              defaultValue={legalHeirs[clickedIndex].name}
              fullWidth
            />
          </div>

          <div style={{ marginTop: "20px" }}>
            <TextField
              disabled
              id="outlined-disabled"
              defaultValue={legalHeirs[clickedIndex].age}
              fullWidth
            />
          </div>

          <div style={{ marginTop: "20px" }}>
            <TextField
              disabled
              id="outlined-disabled"
              defaultValue={legalHeirs[clickedIndex].maritalStatus}
              fullWidth
            />
          </div>

          <div style={{ marginTop: "20px" }}>
            <label htmlFor="AadharCardNumber">Aadhar Card Number*</label>
            <TextField
              disabled
              name="AadharCardNumber"
              id="outlined-disabled"
              defaultValue={legalHeirs[clickedIndex].aadharNumber}
              fullWidth
            />
          </div>
        </Grid>

        <Grid item sm={6} lg={6} xs={12}>
          <div style={{ marginTop: "20px" }}>
            <TextField
              disabled
              id="outlined-disabled"
              defaultValue={legalHeirs[clickedIndex].relationShip}
              fullWidth
            />
          </div>

          <div style={{ marginTop: "20px" }}>
            <TextField
              disabled
              id="outlined-disabled"
              defaultValue={legalHeirs[clickedIndex].aliveorDeceased}
              fullWidth
            />
          </div>

          <div style={{ marginTop: "20px" }}>
            <TextField
              disabled
              id="outlined-disabled"
              defaultValue={legalHeirs[clickedIndex].mobileNumber}
              fullWidth
            />
          </div>

          <div style={{ marginTop: "20px" }}>
            <label htmlFor="VictimAadharFile*">Victim Aadhar File*</label>
           <div style={{display:"flex",gap:"10px"}}>
           <FileUploader
              handleChange={handleChange}
              name="file"
              types={fileTypes}
              minSize
            />
            <Button variant="contained" onClick={handleClickOpen}>View Document</Button>
           </div>
          </div>
        </Grid>
      </Grid>
   <div style={{textAlign:"center",marginTop:"20px"}}>
   <Button variant="contained" onClick={handleClose}>Close</Button>
    
    {/* dialog */}

    <Dialog
        // fullWidth={fullWidth}
        open={open}
        onClose={handleClose}
      >
        <DialogContent>
          <DialogContentText>
             
             {/* <img src={ legalHeirs[clickedIndex].aadharFile} alt="img"  /> */}
             <img src={`data:image/png;base64,${ legalHeirs[clickedIndex].aadharFile}`} alt="Death Certificate" />

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>

   </div>
    </div>
  );
};

export default Heirdialog;
