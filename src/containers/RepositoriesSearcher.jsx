import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../components/SearcherBar.jsx";
import RepositoryCard from "../components/RepositoryCard.jsx";
import Pagination from "../components/Pagination.jsx"

const RepositoriesSearcher = () => {
  const [page, setPage] = useState(1);
  const [repositoryData, setrepositoryData] = useState([]);
  const [repository, setRepository] = useState("");

  useEffect(() => {
    if (repository) {
      fetchData(repository)
    }
  }, [page])

  const handleRepositoryChange = e => {
    setRepository(e.target.value);
  };

  const handleRepositorySubmit = e => {
    fetchData(repository);
  };

  async function fetchData(query) {
    try {
      const { data, status } = await axios({
        url: `https://api.github.com/search/repositories?q=${query}&page=${page}&per_page=6`,
        method: "get"
      });
      if (status === 200) {
        setrepositoryData(data.items);
        console.log(data.items);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container-fluid m-0 p-5 bg-custom min-vh-100">
      <h4 className="text-center p-5 text-white title-responsive">
        What repository are you looking for?
      </h4>
      <SearchBar
        onSubmit={handleRepositorySubmit}
        onChange={handleRepositoryChange}
        searchBarValue={repository}
      />
      <div className="row">
        {repositoryData.map((repository, index) => (
          <div key={index} className="col-sm-12 col-md-6 col-lg-4 mt-3">
            <RepositoryCard repository={repository} />
          </div>
        ))}
      </div>

      <Pagination
        paginationContent={repositoryData}
        page={page}
        previousPage={() => setPage(page - 1)}
        nextPage={() => setPage(page + 1)}
      />
    </div>
  );
};

export default RepositoriesSearcher;
