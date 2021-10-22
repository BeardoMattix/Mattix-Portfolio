import React from "react";
import "../styles/About.css";
import Mattix from "../../blue-shirt.jpg";
import logo from "../../logo.png";

export default function About() {
  return (
    <div>
      <h1 className="about-header">
        <div className="logo-back">
          <img src={logo} alt="logo" className="logo"></img>
        </div>
      </h1>
      <div className="container">
        <div className="col about-me-column">
          <img
            src={Mattix}
            alt="..."
            className="img-thumbnail rounded-circle"
          ></img>

          <p className=" col about-me-content">
            {" "}
            Hello and thanks for checking out my portfolio! My name is Chris
            Mattix and I am currently a student in the UNC Full Stack Developer
            Bootcamp. I am a former teacher who spent 12 years in education
            before deciding it was time to move on to a new career where I can
            put my problem-solving skills to the test.
            <br></br>
            <br></br>I am originally from Montana, and miss my home state
            everyday. I have lived in North Carolina for the past 6 years, and
            truly love it...even if the mountains here don't have the same
            majesty as the ones in Montana.<br></br>
            <br></br>I am an avid weigthlifter, home cook, coffee afficianado,
            book nerd, and music lover. I am a proud resident of Durham, NC and
            am excited to enter the world of web development full-time once my
            coursework has concluded.
          </p>
        </div>
        <div class="col"></div>
      </div>
    </div>
  );
}
