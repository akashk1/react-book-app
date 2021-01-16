import React from "react";
import classes from "./Book.module.css";
import Rating from "../Rating/Rating";
const Book = (props) => {
  let rate = Number(props.book.average_rating);
  // console.log(rate, typeof rate);
  return (
    <div className={classes.card}>
      <h3>Book: {props.book.title}</h3>
      <h3>Price: {props.book.price}</h3>
      <h3>Author: {props.book.authors}</h3>
      <h3>
        Rating{" "}
        <span>
          <Rating
            style={{ justifyContent: "center", marginLeft: "45px" }}
            rating={Number(props.book.average_rating)}
          />
        </span>{" "}
      </h3>
    </div>
  );
};

export default Book;
