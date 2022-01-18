import React from "react";

const SearchButtonComponent = ({p_country, p_setCountry, onSubmit}) => {
  return (
    <>
      <div className="container">
        <div className="search-box">
          <input
            type="text"
            value = {p_country}
            onChange={(e)=>{p_setCountry(e.target.value)}}
            className="search-input"
            placeholder="Search.."
          ></input>
          <button className="search-button" onClick={onSubmit}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchButtonComponent
