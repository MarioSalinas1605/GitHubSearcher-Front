import React from "react";
import { Link } from "react-router-dom";

import "bootstrap/js/src/collapse.js";
import "./styles/Header.scss";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <Link to="/" className="navbar-brand text-white title-responsive">
        GitHub Searcher
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link
              to="/"
              className="nav-link ml-5 text-white title-secondary-responsive"
            >
              Users
            </Link>
          </li>
          <li className="nav-item ml-5">
            <Link
              to="/repository"
              className="nav-link text-white title-secondary-responsive"
            >
              Repositories
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
