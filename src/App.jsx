import React, { useState } from "react";
import "./App.css";
import CheckId from "./common/components/CheckId/CheckId";
import Card from "./common/components/IdCard/Card";

function App() {
  const [showCheckId, setShowCheckId] = useState(false);

  return (
    <>
      {!showCheckId ? (
        <Card onImageClick={() => setShowCheckId(true)} />
      ) : (
        <CheckId onCancel={() => setShowCheckId(false)} />
      )}
    </>
  );
}

export default App;
