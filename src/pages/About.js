// src/components/About.js
import React from "react";

const About = () => {
  return (
    <div className="container mt-4">
      <h2>About Us</h2>
      <p>
        Welcome to our application! This app is designed to help you manipulate text in various ways.
        You can enter your text, use different buttons to modify the text, and see a summary of the text content.
      </p>
      <p>
        <strong>Features:</strong>
        <ul>
          <li>Convert text to uppercase</li>
          <li>Convert text to lowercase</li>
          <li>Reverse the text</li>
          <li>Clear the text area</li>
          <li>Display text summary including total characters and words</li>
        </ul>
      </p>
    </div>
  );
};

export default About;
