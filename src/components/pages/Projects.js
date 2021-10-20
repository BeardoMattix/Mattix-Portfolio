import React from "react";
import "../styles/Projects.css";
import CodeSocial from "../../code_social_demo.gif";
import Skillet from "../../landing-demo.gif";
import Quiz from "../../code-quiz-demo.gif";

export default function Projects() {
  return (
    <div className="container projects-container">
      <h1 className="projects-header">Projects</h1>
      <p>
        Here are some examples of projects I've worked on. They range in
        complexity, and I love learning new framworks and technologies.
      </p>
      <div class="container">
        <div class="row align-items-center">
          <div class="col">
            <div className="card project-card">
              <img
                src={CodeSocial}
                class="card-img-top"
                alt="Code Social Demo"
              ></img>
              <div className="card-body">
                <h5 className="card-title">Code Social</h5>
                <p className="card-text">
                  Code Social is a social media application that helps new and
                  experienced developers connect and share insights.
                </p>
                <a
                  href="http://secure-meadow-77946.herokuapp.com/"
                  rel="noreferrer"
                  target="_blank"
                  className="btn btn-primary"
                >
                  Deployed Site
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <div className="card project-card ">
              <img
                src={Skillet}
                class="card-img-top"
                alt="Skillet and Shaker Demo"
              ></img>
              <div className="card-body">
                <h5 className="card-title">Skillet & Shaker</h5>
                <p className="card-text">
                  A recipe search engine for food and cocktails.
                </p>
                <a href="/" className="btn btn-primary">
                  Deployed Site
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <div className="card project-card">
              <img src={Quiz} class="card-img-top" alt="Code Quiz Demo"></img>
              <div className="card-body">
                <h5 className="card-title">Code Social</h5>
                <p className="card-text">
                  Code Social is a social media application that helps new and
                  experienced developers connect and share insights.
                </p>
                <a href="/" className="btn btn-primary">
                  Deployed Site
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
