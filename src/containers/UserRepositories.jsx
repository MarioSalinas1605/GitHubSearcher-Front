import React, { useEffect, useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import RepositoryCard from "../components/RepositoryCard.jsx";
import Pagination from "../components/Pagination.jsx"

const UserRepositories = ({ user }) => {
  const [page, setPage] = useState(1);
  const [userRepos, setUserRepos] = useState([]);

  useEffect(() => {
    fetchData(user);
  }, [page]);

  async function fetchData(query) {
    try {
      const { data, status } = await axios({
        url: `https://api.github.com/users/${query}/repos?page=${page}&per_page=6`,
        method: "get"
      });
      if (status === 200) {
        const arrayData = Object.values(data);
        setUserRepos(arrayData);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container-fluid m-0 p-5 bg-custom min-vh-100">
      <h4 className="text-center p-5 text-white title-responsive">
        This are the repositories of {user}
      </h4>
      <div className="row mb-3">
        {userRepos.map((repository, index) => (
          <div key={index} className="col-sm-12 col-md-6 col-lg-4 mt-3">
            <RepositoryCard repository={repository} />
          </div>
        ))}
      </div>
      
      <Pagination
        paginationContent={userRepos}
        page={page}
        previousPage={() => setPage(page - 1)}
        nextPage={() => setPage(page + 1)}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps, null)(UserRepositories);
// export default UserRepositories;
