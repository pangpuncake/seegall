import React from "react";
import img from "./quick-sort.png";
import "./Explanation.css";

const QuizSortExplanation = (props) => {
  return (
    <div>
      <h1>Quick Sort</h1>
      <p>subheading</p>
      <img src={img} alt="Logo" className="image" />
      <p className="caption">caption</p>
    </div>
  );
};

export default QuizSortExplanation;
