import React, { useState } from "react";
import Search from "../Search/Search";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
const Navbar = (props) => {
  const [searchText, setSearchText] = useState("");
  const handleInput = (e) => {
    setSearchText(e.target.value);
  };
  const submit = (e) => {
    e.preventDefault();

    // props.getSearchedMovies(searchText);
  };
  const handleClick = () => {};

  return (
    <div>
      <div className={classes.navbar}>
        <Link
          onClick={handleClick}
          to="/"
          style={{ textDecoration: "none", color: "white" }}
        >
          <h4 className={classes.home}>Home</h4>
        </Link>
      </div>
      <button className={classes.button} onClick={submit}>
        Search
      </button>
      <form onSubmit={submit}>
        <Search />
      </form>
    </div>
  );
};
// const mapDispatchToProps = (dispatch) => {
//   return {
//     getSearchedMovies: (searchText) =>
//       dispatch(actions.searchMovie(searchText)),
//     fetchMoviesList: () => {
//       dispatch(actions.initMovieData());
//     },
//   };
// };

// export default connect(null, mapDispatchToProps)(Navbar);
export default Navbar;
