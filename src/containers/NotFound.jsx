import React from "react";

const NotFound = () => {
  return (
    <div className="container-fluid m-0 p-5 bg-custom min-vh-100">
      <h4 className="text-center p-5 text-white title-responsive">
        Sorry we couldn't find your page
      </h4>
      <div className="row">
        <div className="col text-center">
          <img
            className="img-fluid"
            src="https://avatars2.githubusercontent.com/u/1090765?s=460&v=4"
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
