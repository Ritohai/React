import React, { useState } from "react";

function SearchReview(props) {
 
    const {divColor, setDivColor} = props;
    console.log(props);
    setDivColor(divColor === "black" ? " rgb(131, 173, 173)" : "black");
const handleButtonClick = () => {}
  return (
    <div className="header">
      <div className="header-search">
        <h2>
          Review TA Béc Cọp!!! <i className="fa-solid fa-comment-medical"></i>
        </h2>
        <a href="#" onClick={handleButtonClick}><i className="fa-solid fa-circle-half-stroke"></i></a>
      </div>
      <div className="search">
        <input placeholder="Search here..." className="inputx"></input>
        <button className="btn-search"><i className="fa-solid fa-magnifying-glass"></i></button>
      </div>
    </div>
  );
}

export default SearchReview;

