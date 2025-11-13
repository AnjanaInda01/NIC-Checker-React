import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./style.css";

export default function Text({ className, value, onChange }) {
  return (
    <TextField
      id="outlined-basic"
      label="Enter NIC No"
      variant="outlined"
      className={className}
      fullWidth
      value={value}
      onChange={onChange}
    />
  );
}
