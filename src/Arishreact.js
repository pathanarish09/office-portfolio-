import "./Arishreact.css";

import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="Header">
      <img src={require("../assets/logo.png")} className="Logo" alt="logo" />
      <nav className="Nav">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/features">Features</a>
        <a href="/gallery">Gallery</a>
        <button>Logout</button>
      </nav>
    </header>
  );
}
