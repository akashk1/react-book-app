import React, { useEffect, useState } from "react";
import axios from "axios";
import { BooksApi as url } from "../../Api";
import Book from "../Book/Book";
import classes from "./Books.module.css";

const Books = (props) => {
  let n = 11003 / 20;
  //   const [books, setBooks] = useState(
  //     Array.from({ length: n }, () => Array.from({ length: n }, () => null))
  //   );
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(0);
  useEffect(() => {
    axios.get(url).then((jsonData) => {
      //   let copy = [...books];
      //   for (let i = 0; i < n; i++)
      //     copy[i] = jsonData.data.slice(i * 20, (i + 1) * 20);
      //   setBooks(copy);
      //   console.log(copy[0]);
      setBooks(
        jsonData.data.sort((a, b) => {
          return b.average_rating - a.average_rating;
        })
      );
    });
    console.log(books[0]);
  }, []);

  const next = () => {
    setPage((page) => page + 1);
  };
  const previous = () => {
    setPage((page) => page - 1);
  };
  return (
    <React.Fragment>
      <div className={classes.container}>
        {books.slice(page * 20, (page + 1) * 20).map((book) => {
          return <Book book={book} key={book.bookID} />;
        })}
      </div>
      <div className={classes.pagination}>
        <button
          className={classes.previous}
          onClick={previous}
          disabled={page < 1}
        >
          Previous Page
        </button>
        <button className={classes.next} onClick={next} disabled={page > n - 1}>
          Next Page
        </button>
      </div>
    </React.Fragment>
  );
};

export default Books;
