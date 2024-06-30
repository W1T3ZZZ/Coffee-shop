import React from "react";
import MultipleCoffees from "../coffee images/latte.jpg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultipleCoffees})` }}
      ></div>
      <div className="aboutBottom">
        <h1>ABOUT US</h1>
        <p>
          We are most worldwide coffee shop, we're trying to make you a perfect
          coffee which make you staying awake through entire day.
        </p>
      </div>
    </div>
  );
}

export default About;
