import React from "react";
import Navigation from "../components/Navigation";

// Styles
import "../styles/AllAuthors.scss";

const AllAuthors = () => {
  return (
    <div className="AllAuthors_container">
      <div>
        <Navigation />
      </div>
      <div>
        <h1>All Authors</h1>
      </div>
    </div>
  );
};

export default AllAuthors;
