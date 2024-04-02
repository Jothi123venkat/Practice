import { Grid } from "@mui/material";
import React from "react";
import Practice from "./Practice";

const Tanfundesign = () => {
  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item sm={8} lg={8} xs={12}>
          <h2> hi</h2>
        </Grid>

        <Grid item sm={4} lg={4} xs={12}>
          {/* <h2>hello</h2> */}
          <h2> Rate Your Score</h2>

          <p>
            how efficiently does the startup address a specific problem or pain
            point
          </p>
          <Practice />
        </Grid>
      </Grid>
    </div>
  );
};

export default Tanfundesign;
