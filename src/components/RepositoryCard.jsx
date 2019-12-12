import React from "react";

const RepositoryCard = () => {
  return (
    <div className="card bg-secondary">
      <div className="card-body">
        <h5 className="card-title title-secondary-responsive">
          Repository name
        </h5>
        <h6 className="card-subtitle mb-2 text-dark">Owner of repository</h6>
        <p className="card-text text-responsive">Description of repository</p>
        <p className="card-text text-responsive">Language of repository</p>
        <a href="#" className="btn btn-dark">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default RepositoryCard;
