import React from "react";

import ProductGrid from "../../../grids/ProductGrid";
import { Card, CardContent, Typography, Box } from "@mui/material";

const Products = () => {
   return (
    <Card variant="outlined" height="100%">
      <CardContent sx={{ paddingTop: "2px !important", paddingBottom: "2px !important", paddingLeft: "2px !important", paddingRight: "2px !important", }}>

        <Box>
          <Typography variant="h3" sx={{ marginTop: "5", marginBottom: "0", }} gutterBottom >
            Northwind Trading Company Products
          </Typography>
        </Box>
        <Box sx={{ marginTop: "20px", marginBottom: "20px", }} >
            <ProductGrid/>
        </Box>

      </CardContent>
    </Card>
  );
};
export default Products;
