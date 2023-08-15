import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/library.jpg";
import "../styles/Home.css";

function Home() {
  const styleObj = {
    fontSize: 50,
    color: "#FFFFFF",
  
}

  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h2 style={styleObj}>Best Colleges & Universities to Study Abroad </h2>
        <p  style={styleObj}> Universites Near You
        </p>
        <Link to="/menu">
          <button> EXPLORE </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
