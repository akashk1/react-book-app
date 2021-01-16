import React, { Component, useState, useEffect } from "react";
import Autocomplete from "react-autocomplete";
import "./Search.css";
import { BooksApi as url } from "../../Api";
import axios from "axios";
const App = () => {
  const [val, setVal] = useState("");
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios.get(url).then((jsonData) => {
      setBooks(jsonData.data.slice(0, 10));
    });
  }, []);

  return (
    <div className="autocomplete-wrapper">
      <Autocomplete
        value={val}
        items={books}
        getItemValue={(item) => item.title}
        renderMenu={(item) => <div className="dropdown">{item}</div>}
        renderItem={(item, isHighlighted) => (
          <div className={`item ${isHighlighted ? "selected-item" : ""}`}>
            {item.title}
          </div>
        )}
        onChange={(event, val) => setVal(val)}
        onSelect={(val) => setVal(val)}
      />
    </div>
  );
};

export default App;
