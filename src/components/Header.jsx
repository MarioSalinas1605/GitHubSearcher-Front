import React from "react";
import "bootstrap/js/src/collapse.js";
import "./styles/Header.scss";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <a className="navbar-brand text-white title-responsive" href="#">
        GitHub Searcher
      </a>
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
            <a
              className="nav-link ml-5 text-white title-secondary-responsive"
              href="#"
            >
              Users
            </a>
          </li>
          <li className="nav-item ml-5">
            <a
              className="nav-link text-white title-secondary-responsive"
              href="#"
            >
              Repositories
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
