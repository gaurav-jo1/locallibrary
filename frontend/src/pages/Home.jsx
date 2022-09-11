import React from "react";
import Navigation from "../components/Navigation";

// Styles
import "../styles/Home.scss";

const Home = () => {
  return (
    <div className="Home_container">
      <div>
        <Navigation />
      </div>
      <div className="Home_div">
        <h1>Local Library Home</h1>
        <p>
          Welcome to LocalLibrary, a website developed by{" "}
          <em>Gaurav Joshi</em>!
        </p>
        <h2>Dynamic content</h2>
        <p>The library has the following record counts:</p>

        <ul> 
          <li><strong>Books: </strong></li>
          <li><strong>Copies: </strong></li>
          <li><strong>Copies available: </strong></li>
          <li><strong>Authors: </strong></li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
