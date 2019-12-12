import React from "react";

const UserCard = () => {
  return (
    <>
      <div className="card my-4 my-sm-5 p-2 bg-dark text-secondary">
        <div className="row no-gutters">
          <div className="col-md-4">
            <p>This is my image</p>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title title-secondary-responsive">
                This is the user Nickname
              </h5>
              <p className="card-text text-responsive">This the user name</p>
              <p className="card-text text-responsive">
                This the user description
              </p>
              <p className="card-text text-responsive">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
        <div className="row my-3">
          <div className="col-12 mx-4">
            <p>This are the public user repositories</p>
            <p>This is the company of the user</p>
            <p>This is the location of the user</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCard;
