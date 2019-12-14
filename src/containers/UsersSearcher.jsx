import React, { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import SearchBar from "../components/SearcherBar.jsx";
import UserCard from "../components/UserCard.jsx";
import { registerUser } from "../actions";

import "./styles/UserSearcher.scss";

const UserSearcher = props => {
  const [page, setPage] = useState(1);
  const [userHistory, setuserHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState("");

  const loadMoreUsers = () => {
    setPage(page + 1);
  };

  const handleUserChange = e => {
    setUser(e.target.value);
  };

  const handleUserSubmit = e => {
    setIsLoading(true);
    fetchData(user);
  };

  const handleButton = user => {
    props.registerUser(user);
    props.history.push("/user-repositories");
  };

  async function fetchData(query) {
    try {
      const { data, status } = await axios({
        url: `https://api.github.com/search/users?q=${query}&page=${page}&per_page=6`,
        method: "get"
      });
      if (status === 200) {
        console.log(data.items);

        setuserHistory(data.items);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container-fluid m-0 p-5 bg-custom min-vh-100">
      <h4 className="text-center p-5 text-white title-responsive">
        What user are you looking for?
      </h4>
      <SearchBar
        onSubmit={handleUserSubmit}
        onChange={handleUserChange}
        searchBarValue={user}
      />
      <div className="row">
        {userHistory.map((user, index) => (
          <div key={index} className="col-sm-12 col-md-6 col-lg-4 mt-3">
            <UserCard user={user} onClickButton={handleButton} />
          </div>
        ))}
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  registerUser
};

export default connect(null, mapDispatchToProps)(UserSearcher);
