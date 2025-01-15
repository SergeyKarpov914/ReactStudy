import React from "react";
import { Grid, Box } from "@mui/material";
import ClioTech from "../../views/ClioTech";

const TechnologyTab = () => {
  return (
      <Box>
        <Grid container spacing={0}>
          <Grid item xs={12} lg={12}>
            <ClioTech/>
          </Grid>
        </Grid>
      </Box>
  );
};
export default TechnologyTab;