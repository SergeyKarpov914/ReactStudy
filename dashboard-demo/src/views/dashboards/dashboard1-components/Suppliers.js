import React from "react";

import SupplierGrid from "../../../grids/SupplierGrid";
import { Card, CardContent, Typography, Box } from "@mui/material";

const Suppliers = () => {
   return (
    <Card variant="outlined" height="100%">
      <CardContent sx={{ paddingTop: "2px !important", paddingBottom: "2px !important", paddingLeft: "2px !important", paddingRight: "2px !important", }}>

        <Box>
          <Typography variant="h3" sx={{ marginTop: "5", marginBottom: "0", }} gutterBottom >
            Northwind Trading Company Suppliers
          </Typography>
        </Box>
        <Box sx={{ marginTop: "20px", marginBottom: "20px", }} >
            <SupplierGrid/>
        </Box>

      </CardContent>
    </Card>
  );
};
export default Suppliers;
