import React from "react";

const SearchBar = () => {
  return (
    <form>
      <div className="input-group md-form form-sm form-2 pl-0 my-4">
        <input
          className="form-control py-2 amber-border"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
        <div>
          <button type="button" className="btn btn-light">
            GO
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
