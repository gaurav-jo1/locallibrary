import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AllBooks from "./pages/AllBooks";
import AllAuthors from "./pages/AllAuthors";
import Book from "./pages/Book";
import Author from "./pages/Author";

// Styling
import "./App.scss";
import Header from "./components/Header";

function App() {
  // Dark Mode (ContextAPI can also be used)
  
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Books" element={<AllBooks />} />
        <Route path="/Authors" element={<AllAuthors />} />
        <Route path="/Book/:id" element={<Book />} />
        <Route path="/Author/:id" element={<Author />} />
      </Routes>
    </div>
  );
}

export default App;
