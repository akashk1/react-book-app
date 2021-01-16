import React, { useImperativeHandle, useState } from "react";
import Books from "./components/Books/Books";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Books />
    </BrowserRouter>
  );
}

export default App;
