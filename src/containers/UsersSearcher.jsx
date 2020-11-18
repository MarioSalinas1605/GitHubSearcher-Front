import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import SearchBar from "../components/SearcherBar.jsx";
import UserCard from "../components/UserCard.jsx";
import Spinner from "../components/Spinner.jsx"
import Pagination from "../components/Pagination.jsx"
import { registerUser } from "../actions";

import "./styles/UserSearcher.scss";

const UserSearcher = props => {
  const [page, setPage] = useState(1);
  const [userData, setuserData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState("");

  useEffect(() => {
    if (user) {
      fetchData(user)  
    }
  }, [page])

  const handleUserChange = e => {
    setUser(e.target.value);
  };

  const handleUserSubmit = e => {
    fetchData(user);
  };

  const handleButton = user => {
    props.registerUser(user);
    props.history.push("/user-repositories");
  };

  async function fetchData(query) {
    try {
      setuserData([])
      setIsLoading(true);
      setIsError(false);
      const { data, status } = await axios({
        url: `https://api.github.com/search/users?q=${query}&page=${page}&per_page=6`,
        method: "get"
      });
      if (status === 200) {
        setuserData(data.items);
        setIsLoading(false);
      }
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
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

      {isLoading && <Spinner />}
      {isError && 
        <div className="alert alert-warning" role="alert">
          Ops something went wrong
        </div>
      }
      <div className="row">
        {userData.map((user, index) => (
          <div key={index} className="col-sm-12 col-md-6 col-lg-4 mt-3">
            <UserCard user={user} onClickButton={handleButton} />
          </div>
        ))}
      </div>

      <Pagination
        paginationContent={userData}
        page={page}
        previousPage={() => setPage(page - 1)}
        nextPage={() => setPage(page + 1)}
      />
    </div>
  );
};

const mapDispatchToProps = {
  registerUser
};

export default connect(null, mapDispatchToProps)(UserSearcher);
