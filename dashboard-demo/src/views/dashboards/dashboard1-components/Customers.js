import React from "react";

import CustomerGrid from "../../../grids/CustomerGrid";
import { Card, CardContent, Typography, Box } from "@mui/material";

const Customers = () => {
   return (
    <Card variant="outlined" height="100%">
      <CardContent sx={{ paddingTop: "2px !important", paddingBottom: "2px !important", paddingLeft: "2px !important", paddingRight: "2px !important", }}>

        <Box>
          <Typography variant="h3" sx={{marginTop: "5", marginBottom: "0", }} gutterBottom >
            Northwind Trading Company Customers
          </Typography>
        </Box>
        <Box sx={{ marginTop: "20px", marginBottom: "20px", }} >
            <CustomerGrid/>
        </Box>

      </CardContent>
    </Card>
  );
};
export default Customers;
