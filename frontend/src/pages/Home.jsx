import React from "react";
import Navigation from "../components/Navigation";
import { useQuery } from "@tanstack/react-query";

// Styles
import "../styles/Home.scss";

const Home = () => {
  const { data: libraries, isLoading, isError,} = useQuery(["libraries"], () => {
    return fetch("http://127.0.0.1:8000/catalog/").then((t) => t.json());
  });

  if (isLoading) return <h1>Loading...</h1>;

  if (isError) return <h1>Error with request</h1>

  return (
    <div className="Home_container">
      <div>
        <Navigation />
      </div>
      <div className="Home_div">
        <h1>Local Library Home</h1>
        <p>
          Welcome to LocalLibrary, a website developed by{" "}
          <em>Gaurav Joshi </em>!
        </p>
        <h2>Dynamic content</h2>
        <p>The library has the following record counts:</p>
        {console.log(libraries)}
        <ul> 
          <li><strong>Books: {libraries.num_books}  </strong></li>
          <li><strong>Copies: {libraries.num_instances}</strong></li>
          <li><strong>Copies available: {libraries.num_instances_available}</strong></li>
          <li><strong>Authors: {libraries.num_authors}</strong></li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
