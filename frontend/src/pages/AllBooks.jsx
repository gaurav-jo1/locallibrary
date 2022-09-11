import React from 'react'
import Navigation from '../components/Navigation'

// Styles
import "../styles/AllBooks.scss";

const AllBooks = () => {
  return (
    <div className='AllBooks_container'>
      <div>
        <Navigation />
      </div>
      <div>
        <h1>All Books</h1>
      </div>
    </div>
  )
}

export default AllBooks