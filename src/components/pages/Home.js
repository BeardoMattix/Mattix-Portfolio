import React from "react";
import "../styles/Home.css";
import logo from "../../logo.png";

export default function Home() {
  return (
    <div className="container home-container">
      <h1 className="home-header">Home Page</h1>
      <p>
        Welcome to my portfolio. I am a Full Stack Developer who utilizes the
        MERN stack. On this page you can see some of the projects I've worked
        on.
      </p>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={logo} className=" w-50" alt="..."></img>
          </div>
          <div className="carousel-item">
            <img src={logo} className=" w-50" alt="..."></img>
          </div>
          <div className="carousel-item">
            <img src={logo} className=" w-50" alt="..."></img>
          </div>
        </div>
      </div>
    </div>
  );
}
