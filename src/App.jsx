import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";

const App = () => {
  return (
    <Routes>
      <Route
        path="/*"
        element={
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        }
      />
    </Routes>
  );
};

export default App;
