import React from "react";
import Navigation from "../components/Navigation";
import { useQuery } from "@tanstack/react-query";
import { Link } from 'react-router-dom';


// Styles
import "../styles/AllAuthors.scss";

const AllAuthors = () => {
  const { data: authors, isLoading, isError,} = useQuery(["authors"], () => {
    return fetch("http://127.0.0.1:8000/catalog/authors/").then((t) => t.json());
  });

  if (isLoading) return <h1>Loading...</h1>;

  if (isError) return <h1>Error with request</h1>

  return (
    <div className="AllAuthors_container">
      <div>
        <Navigation />
      </div>
      <div>
        <h1>All Authors</h1>
        <div>
          {authors.map((author) => {
            return (
              <div key={author.id}>
                <ul>
                  <Link to="/">
                    <li>{author.first_name} {author.last_name}</li>
                  </Link>
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default AllAuthors;
