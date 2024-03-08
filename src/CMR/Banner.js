import React from "react";
import "./Banner.css";
import { Container, Grid, Button } from "@mui/material";

const Banner = () => {
  return (
    <div className="Banner">
      <Container>
        <div className="banner-div">
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item sm={12} md={8} lg={8}>
            <div className="content-div">
                <h1>Cheif Minister's Accident Relief Fund Portal</h1>
                <div className="content-button">
                  <Button
                    variant="contained"
                    sx={{
                      background: "#fff",
                      color: "blue",
                      fontWeight:'600',
                      textTransform:'none',
                      "&:hover": {
                        color: "#fff",
                      
                      },
                    }}
                  >
                    Login with Mobile number
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      background: "#fff",
                      color: "blue",
                      fontWeight:'600',
                      textTransform:'none',
                      "&:hover": {
                        color: "#fff",
                      
                      },
                    }}
                  >
                    Login with PS code
                  </Button>
                </div>
              </div>
            </Grid>
            <Grid item sm={12} md={4} lg={4}>
            <img src="/CM cutout.png" alt="Cm-img" className="cm-img" />
              
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
