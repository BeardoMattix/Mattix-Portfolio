import React from "react";
import "../styles/Contact.css";
export default function Contact() {
  return (
    <div className="container">
      <h1 className="contact-header">Contact Me</h1>
      <form
        action="https://formsubmit.co/christopher.mattix@gmail.com"
        method="POST"
      >
        <p className="contact-form-header">
          Enter your email and questions and I will get back to you ASAP:
        </p>
        <input
          type="email"
          name="email"
          className="user-email"
          placeholder="Email Address"
          required
        ></input>
        <br></br>
        <input
          type="text"
          name="message"
          className="textarea"
          placeholder="Write your questions here"
          required
        ></input>
        <br></br>
        <button className="button" type="submit" id="questions-submit">
          Submit
        </button>
      </form>
    </div>
  );
}
