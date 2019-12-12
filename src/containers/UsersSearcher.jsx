import React from "react";
import SearchBar from "../components/SearcherBar.jsx";
import UserCard from "../components/UserCard.jsx";

const UserSearcher = () => {
  return (
    <div className="container">
      <h4 className="text-center m-5">What user are you looking for?</h4>
      <SearchBar />
      <UserCard />
    </div>
  );
};

export default UserSearcher;
