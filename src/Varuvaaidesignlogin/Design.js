import React, { useState } from "react";
import "./Design.css";
import { Box, Grid, Slide } from "@mui/material";
import { grow555, gub, varuvaai } from "../Assests/JsExports";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Logins from "../Firebase_ui/Logins";
import CloseIcon from "@mui/icons-material/Close";
import Auth from "./OtpLogin/Auth";
import { Navigate, useNavigate } from "react-router-dom";
import { auth, googleAuthProvider,} from "../FIreBase Auth/Firebase";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Design = () => {
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("sm");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMaxWidthChange = (event) => {
    setMaxWidth(
      // @ts-expect-error autofill of arbitrary value is not handled.
      event.target.value
    );
  };



  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await auth.signInWithEmailAndPassword(email, password);
  //     console.log(email);
  //     console.log(password);
  //     navigate("/LoginSuccess", { state: { email } });
  //   } catch (error) {
  //     alert("Invalid Username and Password. Please try again.");
  //   }
  // };

  // const handleGoogleRegister = async () => {
  //   try {
  //     const result = await auth.signInWithPopup(googleAuthProvider);
  //     const googleEmail = result.user.email;
  //     navigate("/LoginSuccess", { state: { email: googleEmail } });
  //   } catch (error) {
  //     alert("Google Login Error: " + error.message);
  //   }
  // };
  



  return (
    <>
      <div></div>

      <div>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ border: "none", marginTop: "10px" }}
        >
            <Grid item md={6} lg={6} xs={12}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img src={varuvaai} alt="img" />
              </div>
              <h3 style={{ color: "white", textAlign: "center" }}>
                GROW YOUR BUSINESS
              </h3>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                  src={grow555}
                  alt="img"
                  style={{
                    width: "100%",
                    maxWidth: "70%",
                    // display: "flex",
                    // justifyContent: "center",
                    // margin:"0px auto"
                  }}
                />
              </div>
            </Grid>

          <Grid
            item
            md={6}
            lg={6}
            xs={12}
            className="forms"
            sx={{ boxShadow: "none" }}
          >
            <form className="form" >
              <div className="flex-column">
                <label>Email</label>
              </div>
              <div className="inputForm">
                <input
                  placeholder="Enter your Email"
                  className="input"
                  type="text"
                />
              </div>

              <div className="flex-column">
                <label>Password</label>
              </div>
              <div className="inputForm">
                <input
                  placeholder="Enter your Password"
                  className="input"
                  type="password"
                />
              </div>

              <div className="flex-row">
                {/* <div>
                  <input type="radio" />
                  <label style={{ color: "white" }}>Remember me</label>
                </div> */}
                <span className="span">Forgot password?</span>
              </div>
              <button className="button-submit" >Sign In</button>
              <p className="p">
                Don't have an account? <span className="span">Sign Up</span>
              </p>
              <p className="p line">Or With</p>

              <div className="flex-row">
                <button className="button-submit" >
                  {/* SVG path content */}
                  Google
                </button>
                <button className="button-submit">Facebook</button>
              </div>
            </form>
          </Grid>
        </Grid>
      </div>
      <div>
        <Dialog
          // fullWidth={fullWidth}
          // maxWidth={maxWidth}
          open={open}
          onClose={handleClose}
          // onClick={handleMaxWidthChange}
          TransitionComponent={Transition}
        >
          {/* <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              background: "linear-gradient(100deg, skyblue, darkblue)",
              color: "white",
            }}
          >
            <DialogTitle>LOGIN WITH MOBILE NUMBER</DialogTitle>
            <Button onClick={handleClose} sx={{ color: "white" }}>
              <CloseIcon />
            </Button>
          </div> */}

          <DialogContent
            sx={{ background: "linear-gradient(45deg, skyblue, darkblue)" }}
          >
            <DialogContentText>
              <Auth setopen={setOpen} />
              <Logins />
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default Design;
