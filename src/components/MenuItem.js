import React from "react";
// import { Link } from "react-router-dom";

function MenuItem({ image, name, course, price, duration }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      {/* <Link to="/contact">
          <button> EXPLORE </button>
        </Link> */}
      <h2> {name} </h2>
      <p><b>Course: </b>{course}</p>
      <p> <b>Fees: </b>$ {price} </p>
      <p><b>Duration: </b> {duration}</p>
    </div>
  );
}

export default MenuItem;
