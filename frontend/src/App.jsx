import React,{useContext} from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AllBooks from "./pages/AllBooks";
import AllAuthors from "./pages/AllAuthors";
import Book from "./pages/Book";
import Author from "./pages/Author";

// Styling
import "./App.scss";
import Header from "./components/Header";
import { ThemeContext } from "./Context/ThemeContextProvider";

function App() {
  const {theme} = useContext(ThemeContext)
  return (
      <div className={`App_${theme}`}>
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
