import React from "react";
import img from "./merge-sort-LABELLED.png";
import "./Explanation.css";

const MergeSortExplanation = (props) => {
  return (
    <div>
      <h2>Merge Sort</h2>
      <p>
        Merge Sort is a Divide and Conquer, recursive algorithm. It cuts the
        input array into 2 halves, then calls this recursively on its 2 halves
        before merging the 2 halves together. The merging function, however,
        assumes the 2 sub-array halves are sorted before merging them into 1
        array.
        <br />
        <br />
        Notice from the visualisation, merge sort will result in smaller sorted
        sub-arrays before being combined to a larger sorted sub-array. This is
        essentially how the algorithm sorts.
      </p>
      <img src={img} alt="Logo" className="image" />
      <p className="caption">
        The numbers represent the order in which the steps are processed. Once
        the array size becomes 1, the merge process will happen until the array
        is completely merged.
      </p>
      <br />
      <br />
      <p>
        Refer to the brief algorithm process below and trace it out to
        understand better!
      </p>
      <div className="code">
        <pre>
          <code>
            MergeSort(A, p, r)
            <br />
            if p &gt; r
            <br />
            return q = (p+r)/2
            <br />
            <br />
            mergeSort(A, p, q)
            <br />
            mergeSort(A, q+1, r)
            <br />
            merge(A, p, q, r)
          </code>
        </pre>
      </div>
    </div>
  );
};

export default MergeSortExplanation;
