import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import AllBooks from "./pages/AllBooks";
import AllAuthors from "./pages/AllAuthors";

// Styling
import "./App.scss"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Books" element={<AllBooks />} />
        <Route path="/Authors" element={<AllAuthors />} />
      </Routes>
    </div>
  );
}

export default App;
