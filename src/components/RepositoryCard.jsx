import React from "react";

const RepositoryCard = ({ repository }) => {
  return (
    <div className="card bg-secondary">
      <div className="card-body">
        <h5 className="card-title title-secondary-responsive">
          {repository.full_name}
        </h5>
        <h6 className="card-subtitle mb-2 text-dark">
          {repository.owner.login}
        </h6>
        <p className="card-text text-responsive">{repository.description}</p>
        <p className="card-text text-responsive">
          Language: {repository.language}
        </p>
        <a href={repository.html_url} target="_blank" className="btn btn-dark">
          Go GitHub Repository
        </a>
      </div>
    </div>
  );
};

export default RepositoryCard;
