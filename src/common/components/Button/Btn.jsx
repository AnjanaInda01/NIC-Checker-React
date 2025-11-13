import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function Btn({ className, text, type = "button", onClick }) {
  return (
    <div className={className}>
      <Stack spacing={2} direction="row" sx={{ width: "100%" }}>
        <Button variant="contained" fullWidth type={type} onClick={onClick}>
          {text}
        </Button>
      </Stack>
    </div>
  );
}
