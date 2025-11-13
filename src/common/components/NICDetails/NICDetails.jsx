import React from "react";
import { Box, Typography } from "@mui/material";
import "./style.css";

export default function NICDetails({ nic, birthday, gender }) {
  return (
    <Box className="nic-details-container">
      <Box className="nic-box">
        <Typography className="nic-label">NIC No</Typography>
        <Typography className="nic-value">{nic}</Typography>
      </Box>
      <Box className="nic-box">
        <Typography className="nic-label">Birthday</Typography>
        <Typography className="nic-value">{birthday}</Typography>
      </Box>
      <Box className="nic-box">
        <Typography className="nic-label">Gender</Typography>
        <Typography className="nic-value">{gender}</Typography>
      </Box>
    </Box>
  );
}
