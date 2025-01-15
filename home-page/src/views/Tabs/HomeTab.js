import React from "react";
import { Grid, Box } from "@mui/material";
import ClioHome from "../../views/ClioHome";

const HomeTab = () => {

  console.log("HomeTab -> ClioHome");

  return (
      <Box>
        <Grid container spacing={0}>
          <Grid item xs={12} lg={12}>
            <ClioHome/>
          </Grid>
        </Grid>
      </Box>
  );
};
export default HomeTab;
