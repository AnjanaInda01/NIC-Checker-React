import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./style.css";

export default function Text({ className }) {
  return (
    <Box
      component="form"
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="Enter NIC No"
        variant="outlined"
        className={className}
        fullWidth
      />
    </Box>
  );
}
