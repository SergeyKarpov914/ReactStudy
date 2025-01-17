import React from "react";

import { OrderGrid } from "../../../grids/OrderGrid";
import { Card, CardContent, Typography, Box } from "@mui/material";

const OrderSummary = (props) => {
   return (
    <Card variant="outlined">
      <CardContent sx={{ paddingTop: "2px !important", paddingBottom: "2px !important", paddingLeft: "2px !important", paddingRight: "2px !important", }}>

        {/* --- Header Box --- */}
        <Box sx={{ display: { sm: "flex", xs: "block", }, alignItems: "flex-start", }} >
            <Typography variant="h3" sx={{ marginTop: "0", marginBottom: "0", }} gutterBottom >
               Northwind Trading Company Orders
            </Typography>
        </Box>

        {/* --- Content Box --- */}
        <Box sx={{ marginTop: "5px", }} >
            <OrderGrid setSelectedRow={props.setSelectedRow}/>
        </Box>

      </CardContent>
    </Card>
  );
};

export default OrderSummary;
