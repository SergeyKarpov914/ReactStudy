import React from "react";
import { Grid, Box } from "@mui/material";
import ClioPeople from "../../views/ClioPeople";

const PeopleTab = () => {
  return (
      <Box>
        <Grid container spacing={0}>
          <Grid item xs={12} lg={12}>
            <ClioPeople/>
          </Grid>
        </Grid>
      </Box>
  );
};
export default PeopleTab;