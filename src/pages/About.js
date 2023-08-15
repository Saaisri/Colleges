import React from "react";
import shelf from "../assets/shelf.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${shelf})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <h3>
        Welcome to the Website, where education meets innovation!
        We've been shaping minds and changing lives. Our mission is to provide a transformative educational experience that empowers students to thrive in a dynamic global society. Our core values of excellence, diversity, integrity, and community guide everything we do.
        To inspire lifelong learning and personal growth, fostering a generation of leaders who make a positive impact on the world.
        </h3>
      </div>
    </div>
  );
}

export default About;
