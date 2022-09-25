import React from 'react'
import Navigation from "../components/Navigation";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import ReactLoading from 'react-loading';

// styling
import "../styles/Author.scss";


const Author = () => {
  const params = useParams();
  const { data: author, isLoading, isError,} = useQuery(["author"], () => {
    return fetch(`http://127.0.0.1:8000/catalog/author/${params.id}`).then((t) =>t.json()
    );
  });

  if (isLoading) return <div className="Loading" ><ReactLoading /></div>;

  if (isError) return <h1>Error with request</h1>;

  console.log(author)
  return (
    <div className='Author_continer'>
      <div>
        <Navigation />
      </div>
      <div className='Author_div'>
        <h1>Author: {author.first_name} {author.last_name}</h1>
        <p>{author.date_of_birth} - {author.date_of_death}</p>
          <h2>Books</h2>
        <ul>
          <li>Book 1</li>
          <li>Book 2</li>
        </ul>
      </div>
    </div>
  )
}

export default Author