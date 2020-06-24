import React from "react";
import img from "./bubble-sort.png";
import "./Explanation.css";

const BubbleSortExplanation = (props) => {
  return (
    <div>
      <h1>Bubble Sort</h1>
      <p>
        Bubble Sort works by swapping adjacent elements that are not in order
        until the array is completely sorted.
      </p>
      <img src={img} alt="Logo" className="bigger-image" />
      <p className="caption">caption</p>
    </div>
  );
};

export default BubbleSortExplanation;
