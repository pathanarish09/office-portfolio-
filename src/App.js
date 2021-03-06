import "./App.css";

import React, { Component } from "react";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import About from "./Components/About";
import Market from "./Components/Market";
import Product from "./Components/Product";
import Form from "./Components/Form";
import Home from "./Components/Home";
import Header from "./Components/Header";

class App extends Component {
  render() {
    return (
      <div>
        
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<Product />} />
          </Routes>
        </BrowserRouter>
      </div>
      
    );
    
  }
}

export default App;

{
  /* <Link to="/about">About</Link>
          <Link to="/market">market</Link>
          <Link to="/product">product</Link>
          <Link to="/form">form</Link>
          <Routes>
            <Route path="/market" element={<Market />} />
            <Route path="/about" element={<About />} />
            <Route path="/form" element={<Form />} />
          </Routes> */
}
