import React from "react";
import SearchBar from "../components/SearcherBar.jsx";

const RepositoriesSearcher = () => {
  return (
    <div className="container-fluid m-0 p-5 bg-custom min-vh-100">
      <h4 className="text-center p-5 text-white title-responsive">
        What repository are you looking for?
      </h4>
      <SearchBar />
    </div>
  );
};

export default RepositoriesSearcher;
