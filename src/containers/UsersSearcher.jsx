import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearcherBar.jsx";
import UserCard from "../components/UserCard.jsx";

import "./styles/UserSearcher.scss";

const UserSearcher = () => {
  const [page, setPage] = useState(1);
  const [userHistory, setuserHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadMoreUsers = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    fetch(
      `https://api.github.com/search/users?q=MarioSalinas&page=${page}&per_page=6`,
      {
        method: "GET",
        headers: new Headers({
          Accept: "application/vnd.github.cloak-preview"
        })
      }
    )
      .then(res => res.json())
      .then(response => {
        setuserHistory(response.items);
        setIsLoading(false);
        console.log(response.items);
      })
      .catch(error => console.log(error));
  }, [page]);

  return (
    <div className="container-fluid m-0 p-5 bg-custom min-vh-100">
      <h4 className="text-center p-5 text-white title-responsive">
        What user are you looking for?
      </h4>
      <SearchBar />
      <div className="row">
        {userHistory.map((user, index) => (
          <div key={index} className="col-sm-12 col-md-6 col-lg-4 mt-3">
            <UserCard user={user} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserSearcher;
