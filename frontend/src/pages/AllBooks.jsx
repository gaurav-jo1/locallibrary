import React from 'react'
import Navigation from '../components/Navigation'
import { useQuery } from "@tanstack/react-query";
import { Link } from 'react-router-dom';
import ReactLoading from 'react-loading';


// Styles
import "../styles/AllBooks.scss";

const AllBooks = () => {

  const { data: books, isLoading, isError,} = useQuery(["books"], () => {
    return fetch("http://127.0.0.1:8000/catalog/books/").then((t) => t.json());
  });

  if (isLoading) return <div className="Loading" ><ReactLoading /></div>;

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
              <div className='book_detail-container' key={book.id}>
                <ul>
                  <Link to={"/Book/" + book.id}>
                    <li><p>{book.title}&nbsp;</p></li>
                  </Link>
                  <p className='book_author-name'>&nbsp;({book.author})</p>
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