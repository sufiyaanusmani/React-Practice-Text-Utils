// src/components/Home.js
import React, { useState } from "react";

const Home = () => {
  const [text, setText] = useState("");

  // Handle text change
  const handleTextChange = (event) => {
    const newText = event.target.value;
    setText(newText);
  };

  // Button functions
  const clearText = () => {
    setText("");
  };

  const toUpperCase = () => {
    const upperText = text.toUpperCase();
    setText(upperText);
  };

  const toLowerCase = () => {
    const lowerText = text.toLowerCase();
    setText(lowerText);
  };

  const reverseText = () => {
    const reversedText = text.split("").reverse().join("");
    setText(reversedText);
  };

  // Calculate text summary
  const getTextSummary = () => {
    const charCount = text.length;
    const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
    return { charCount, wordCount };
  };

  const { charCount, wordCount } = getTextSummary();

  return (
    <div className="container d-flex flex-column align-items-center">
      <h1 className="mb-4">Enter your text here</h1>
      <textarea
        className="form-control"
        rows="10"
        style={{ width: "60%", maxWidth: "600px" }}
        placeholder="Enter your text here..."
        value={text}
        onChange={handleTextChange}
      ></textarea>

      {/* Buttons */}
      <div className="mt-4">
        <button className="btn btn-primary mx-2" onClick={toUpperCase}>
          Convert to Uppercase
        </button>
        <button className="btn btn-secondary mx-2" onClick={toLowerCase}>
          Convert to Lowercase
        </button>
        <button className="btn btn-warning mx-2" onClick={reverseText}>
          Reverse Text
        </button>
        <button className="btn btn-danger mx-2" onClick={clearText}>
          Clear Text
        </button>
      </div>

      {/* Text Summary */}
      <div className="mt-4">
        <p><strong>Total Characters:</strong> {charCount}</p>
        <p><strong>Total Words:</strong> {wordCount}</p>
      </div>
    </div>
  );
};

export default Home;
