import React from "react";

export default function Contact() {
  return (
    <div>
      <h1>Contact Me</h1>
      <form
        action="https://formsubmit.co/christopher.mattix@gmail.com"
        method="POST"
      >
        <p className="">Questions:</p>
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
