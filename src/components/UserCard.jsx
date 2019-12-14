import React from "react";

const UserCard = ({ user, onClickButton }) => {
  const handleButton = () => {
    onClickButton(user.login);
  };

  return (
    <>
      <div className="card my-4 my-sm-5 p-2 bg-secondary text-secondary">
        <img
          src={user.avatar_url}
          className="card-img-top img-fluid"
          alt="Avatar image"
        />
        <div className="card-body">
          <h5 className="card-title text-body">{user.login}</h5>
          <p className="card-text text-body">Score: {user.score}</p>
          <a onClick={handleButton} target="_blank" className="btn btn-dark">
            Go to profile repositories
          </a>
        </div>
      </div>
    </>
  );
};

export default UserCard;
