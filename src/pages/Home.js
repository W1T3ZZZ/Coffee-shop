import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../coffee images/kafica.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>Coffee Shop</h1>

        <p>Coffee to make you awake entire day</p>
        <Link to="/menu">
          <button> Purchase </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
