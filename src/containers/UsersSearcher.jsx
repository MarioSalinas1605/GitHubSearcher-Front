import React from "react";
import SearchBar from "../components/SearcherBar.jsx";

import "./styles/UsersSearcher.scss";

const UserSearcher = () => {
  return (
    <div className="container">
      <h4 className="text-center m-5">What user are you looking for?</h4>
      <SearchBar />
    </div>
  );
};

export default UserSearcher;
