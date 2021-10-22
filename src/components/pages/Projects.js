import React from "react";
import "../styles/Projects.css";
import CodeSocial from "../../code_social_demo.gif";
import Skillet from "../../landing-demo.gif";
import Quiz from "../../code-quiz-demo.gif";

export default function Projects() {
  return (
    <div className="container projects-container">
      <h1 className="projects-header">Portfolio</h1>

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
                  A social media application that helps new and experienced
                  developers connect and share insights.
                </p>
                <a
                  href="http://secure-meadow-77946.herokuapp.com/"
                  rel="noreferrer"
                  target="_blank"
                  className="btn "
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
                  A recipe search engine for food and cocktails. Search by
                  ingredient or diet, and save your favorites.
                </p>
                <a
                  href="https://likearollinson.github.io/recipe-finder/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn "
                >
                  Deployed Site
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <div className="card project-card">
              <img src={Quiz} class="card-img-top" alt="Code Quiz Demo"></img>
              <div className="card-body">
                <h5 className="card-title">JavaScript Code Quiz</h5>
                <p className="card-text">
                  This is a simple quiz application that test the user's
                  knowledge of basic JS.
                </p>
                <a
                  href="https://beardomattix.github.io/Code-Quiz/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn "
                >
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
