import React, {useState} from 'react'
import Navigation from '../components/Navigation'
import { useQuery } from "@tanstack/react-query";
import { Link } from 'react-router-dom';
import ReactLoading from 'react-loading';

// Styles
import "../styles/AllBooks.scss";

const AllBooks = ({theme}) => {
  const [parms, setParms] = useState(1)
  const { data: books, isLoading, isError,refetch} = useQuery(["books"], () => {
    return fetch(`http://127.0.0.1:8000/catalog/ApiBooksListView/?page=${parms}`).then((t) => t.json())
  })

  if (isLoading) return <div className="Loading" ><ReactLoading /></div>;

  if (isError) return <h1>Error with request</h1>

  console.log(parms)
  
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
              <div className={`book_detail-container ${theme}`} key={book.id}>
                <ul>
                  <Link to={"/Book/" + book.id}>
                    <li><p className='books_title_p'>{book.title}&nbsp;</p></li>
                  </Link>
                  <p className='book_author-name'>&nbsp;({book.author})</p>
                </ul>
              </div>
            )
          })}
        </div>
        <div className='book_detail-pagination'>
          <button onClick={() => setParms(parms - 1, refetch() )}>Previos</button>
          <button onClick={() => setParms(parms + 1, refetch() )}>Next</button>
        </div>
      </div>
    </div>
  )
}

export default AllBooks