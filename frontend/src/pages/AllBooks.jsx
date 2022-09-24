import React from 'react'
import Navigation from '../components/Navigation'
import { useQuery } from "@tanstack/react-query";
import { Link } from 'react-router-dom';

// Styles
import "../styles/AllBooks.scss";

const AllBooks = () => {
  const { data: books, isLoading, isError,} = useQuery(["books"], () => {
    return fetch("http://127.0.0.1:8000/catalog/books/").then((t) => t.json());
  });

  if (isLoading) return <h1>Loading...</h1>;

  if (isError) return <h1>Error with request</h1>

  return (
    <div className='AllBooks_container'>
      <div>
        <Navigation />
      </div>
      <div>
        <h1>All Books</h1>
        <div>
          {books.map((book) => {
            return (
              <div key={book.id}>
                <ul>
                  <Link to="/">
                    <li>{book.title}</li>
                  </Link>
                  <p>({book.author})</p>
                  {/* <p>{book.genre[0].name}</p> */}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default AllBooks