import React from "react";
import { Grid, Box } from "@mui/material";
import ClioArticles from "../../views/ClioArticles";

const ArticleTab = () => {
  console.log("ArticleTab -> ClioArticles");

  return (
      <Box>
        <Grid container spacing={0}>
          <Grid item xs={12} lg={12}>
            <ClioArticles/>
          </Grid>
        </Grid>
      </Box>
  );
};
export default ArticleTab;