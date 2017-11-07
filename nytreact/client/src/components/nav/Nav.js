import React from "react";

const Nav = () => (
  <nav className="navbar navbar-inverse navbar-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="collapsed navbar-toggle">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" /> <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a href="/" className="navbar-brand">
          <h1>NYT Article Scubber</h1>
          <h3>Search for articles of interest</h3>
        </a>
      </div>
    </div>
  </nav>
);

export default Nav;
