import React from "react";
import SearchBar from "../components/SearcherBar.jsx";
import UserCard from "../components/UserCard.jsx";

import "./styles/UserSearcher.scss";

const UserSearcher = () => {
  return (
    <div className="container-fluid m-0 p-5 bg-custom min-vh-100">
      <h4 className="text-center p-5 text-white title-responsive">
        What user are you looking for?
      </h4>
      <SearchBar />
      <UserCard />
    </div>
  );
};

export default UserSearcher;
