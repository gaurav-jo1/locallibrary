import React, {useState} from 'react'
import Navigation from '../components/Navigation'
import { useQuery } from "@tanstack/react-query";
import { Link } from 'react-router-dom';
import ReactLoading from 'react-loading';
// import client from "../react-query-client"


// Styles
import "../styles/AllBooks.scss";

const AllBooks = () => {
  const [newLink, setNewLink] = useState(1)
  
  const { data: books, isLoading, isError,} = useQuery(["books"], () => {
    return fetch(`http://127.0.0.1:8000/catalog/ApiBooksListView/?page=${newLink}`).then((t) => t.json());
  });

  if (isLoading) return <div className="Loading" ><ReactLoading /></div>;

  if (isError) return <h1>Error with request</h1>

  // console.log(books.next)
  
  return (
    <div className='AllBooks_container'>
      <div>
        <Navigation />
      </div>
      <div>
        <h1>All Books</h1>
        <div>
          {books.results?.map((book) => {
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
          <div className="book_detail-pagination">
            <div onClick={() => setNewLink(books.previous)}>
             <button>Previos Page</button>
            </div>
            <div  onClick={() => setNewLink(books.next)}>
             <button>Next Page</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllBooks