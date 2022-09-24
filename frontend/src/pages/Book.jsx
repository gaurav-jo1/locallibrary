import React from "react";
import Navigation from "../components/Navigation";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import ReactLoading from 'react-loading';

// styling
import "../styles/Book.scss";

const Book = () => {
  const params = useParams();
  const { data: book, isLoading, isError,
  } = useQuery(["book"], () => {
    return fetch(`http://127.0.0.1:8000/catalog/book/${params.id}`).then((t) =>
      t.json()
    );
  });

  if (isLoading) return <div className="Loading" ><ReactLoading /></div>;

  if (isError) return <h1>Error with request</h1>;
  console.log(book);

  return (
    <div className="Book_container">
      <div>
        <Navigation />
      </div>
      <div className="Book_div">
        <div>

        <h1>Book : {book.title}</h1>
        <strong>Author:&nbsp; <p>{book.author}</p></strong>
        <strong>Summary: &nbsp; <p>{book.summary}</p></strong>
        <strong>ISBN: &nbsp; <p>{book.isbn}</p></strong>
        <strong>Genre:  &nbsp; <p>{book.genre[0].name}</p></strong>
        </div>
      </div>
    </div>
  );
};

export default Book;
