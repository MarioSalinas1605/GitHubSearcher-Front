import React from "react";
import SearchBar from "../components/SearcherBar.jsx";
import RepositoryCard from "../components/RepositoryCard.jsx";

const RepositoriesSearcher = () => {
  return (
    <div className="container-fluid m-0 p-5 bg-custom min-vh-100">
      <h4 className="text-center p-5 text-white title-responsive">
        What repository are you looking for?
      </h4>
      <SearchBar />
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-4 my-3">
          <RepositoryCard />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 my-3">
          <RepositoryCard />
        </div>
      </div>
    </div>
  );
};

export default RepositoriesSearcher;
