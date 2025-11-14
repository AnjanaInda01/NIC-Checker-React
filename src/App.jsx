import React, { useState, useEffect } from "react";
import "./App.css";
import CheckId from "./common/components/CheckId/CheckId";
import Card from "./common/components/IdCard/Card";

import Switch from "@mui/material/Switch";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Stack } from "@mui/material";

function App() {
  const [showCheckId, setShowCheckId] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  return (
    <>
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        sx={{
          position: "absolute",
          top: 20,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <LightModeIcon />
        <Switch
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
          color="default"
        />
        <DarkModeIcon />
      </Stack>

      {!showCheckId ? (
        <Card onImageClick={() => setShowCheckId(true)} />
      ) : (
        <CheckId onCancel={() => setShowCheckId(false)} />
      )}
    </>
  );
}

export default App;
