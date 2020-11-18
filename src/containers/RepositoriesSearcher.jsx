import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../components/SearcherBar.jsx";
import RepositoryCard from "../components/RepositoryCard.jsx";
import Pagination from "../components/Pagination.jsx"
import FetchStates from "../components/FetchStates.jsx"

const RepositoriesSearcher = () => {
  const [page, setPage] = useState(1);
  const [repositoryData, setRepositoryData] = useState([]);
  const [repository, setRepository] = useState("");
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false);

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
      setRepositoryData([])
      setIsLoading(true);
      setIsError(false);
      const { data, status } = await axios({
        url: `https://api.github.com/search/repositories?q=${query}&page=${page}&per_page=6`,
        method: "get"
      });
      if (status === 200) {
        setRepositoryData(data.items);
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
        Which repository are you looking for?
      </h4>
      <SearchBar
        onSubmit={handleRepositorySubmit}
        onChange={handleRepositoryChange}
        searchBarValue={repository}
      />

      <FetchStates loading={isLoading} error={isError}/>

      <div className="row mb-3">
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
