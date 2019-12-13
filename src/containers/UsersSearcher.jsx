import React, { useState, useEffect } from "react";
import axios from "axios";
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
    async function fetchData() {
      try {
        const { data, status } = await axios({
          url: `https://api.github.com/search/users?q=MarioSalinas&page=${page}&per_page=6`,
          method: "get"
        });
        if (status === 200) {
          setuserHistory(data.items);
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
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
