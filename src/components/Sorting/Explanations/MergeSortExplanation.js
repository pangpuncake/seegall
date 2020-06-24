import React from "react";
import img from "./merge-sort-LABELLED.png";
import "./Explanation.css";

const MergeSortExplanation = (props) => {
  return (
    <div>
      <h1>Merge Sort</h1>
      <p>
        Merge Sort is a Divide and Conquer algorithm. It cuts the input array
        into 2 halves, then calls this recursively on its 2 halves before
        merging the 2 halves together. The merging function, however, assumes
        the 2 sub-array halves are sorted before merging them into 1 array.
      </p>
      <img src={img} alt="Logo" className="image" />
      <p className="caption">
        The numbers represent the order in which the steps are processed. Once
        the array size becomes 1, the merge process will happen until the array
        is completely merged.
      </p>
    </div>
  );
};

export default MergeSortExplanation;
