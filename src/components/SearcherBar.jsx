import React from "react";

const SearchBar = ({ searchBarValue, onChange, onSubmit }) => {
  const handleSubmit = event => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group md-form form-sm form-2 pl-0 my-4">
        <input
          className="form-control py-2 amber-border"
          type="text"
          placeholder="Search"
          aria-label="Search"
          onChange={onChange}
          value={searchBarValue}
        />
        <button className="btn btn-secondary">GO</button>
      </div>
    </form>
  );
};

export default SearchBar;
