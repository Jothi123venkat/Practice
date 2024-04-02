import React, { useState } from "react";
import "./Design.css";
import { Box, Grid, Slide } from "@mui/material";
import { gub, varuvaai } from "../Assests/JsExports";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Logins from "../Firebase_ui/Logins";
import CloseIcon from '@mui/icons-material/Close';
import Auth from "./OtpLogin/Auth";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const Design = () => {
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('sm');


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMaxWidthChange = (event) => {
    setMaxWidth(
      // @ts-expect-error autofill of arbitrary value is not handled.
      event.target.value,
    );
  };
  return (
    <>
      <div></div>

      <div>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ border: "none" }}
        >
          <Grid item md={6} lg={6} xs={12}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img src={varuvaai} alt="img" />
            </div>
            <h3 style={{ color: "white", textAlign: "center" }}>
              GROW YOUR BUSINESS
            </h3>
            <img
              src={gub}
              alt="img"
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            />
          </Grid>

          <Grid item md={6} lg={6} xs={12} className="forms" sx={{boxShadow:"none"}}>
            <div className="form-container">
              <h2 style={{textAlign:"center"}}>LOGIN</h2>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  border:"none"
                }}
              >
                <label htmlFor="">Email</label>
                <input
                  placeholder="Enter your Email"
                  className="input"
                  type="text"
                  style={{ background: "white" }}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <label htmlFor="">Password</label>
                <input
                  placeholder="Enter your Password"
                  className="input"
                  type="password"
                />

                <div className="flex-row">
                  <span className="span">Forgot password?</span>
                </div>
                <button className="button-submit">Log In</button>
                <p className="p line">Or With</p>


                <p className="p">
                  <Button className="span"onClick={handleClickOpen} sx={{color:"white"}}> Mobile Number</Button>
                </p>
              

                <div className="flex-row">
                  <button className="btn google" type="submit">Google</button>
                </div>
                <div>
   
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <div >
      <Dialog
        // fullWidth={fullWidth}
        // maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
        // onClick={handleMaxWidthChange}
        TransitionComponent={Transition}
      >
       <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between",background:'linear-gradient(100deg, skyblue, darkblue)',color:"white"}}>
       <DialogTitle >LOGIN WITH MOBILE NUMBER</DialogTitle>
         <Button onClick={handleClose} sx={{color:"white"}} ><CloseIcon/></Button>
       </div>

        <DialogContent sx={{background:'linear-gradient(45deg, skyblue, darkblue)'}}>
          <DialogContentText>
          <Auth setopen ={setOpen}/>
          {/* <Logins/> */}
          </DialogContentText>
         
        </DialogContent>
       
      </Dialog>
      </div>
    </>
  );
};

export default Design;
