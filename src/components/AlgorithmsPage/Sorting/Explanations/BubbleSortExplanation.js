import React from "react";
import img from "./bubble-sort.png";
import "./Explanation.css";

const BubbleSortExplanation = (props) => {
  return (
    <div className='textbox'>
      <h2>Bubble Sort</h2>
      <p>
        Bubble Sort works by swapping two adjacent elements that are not in
        order until the array is completely sorted. Bubble Sort is an iterative
        sorting algorithm. One thing to note about Bubble Sort is that it should
        have a flag to confirm that the array has been sorted to increase
        efficiency.
        <br />
        <br />
        Notice from the visualisation of bubble sort, each pair is compared
        (turning red on comparison) before swapping and moving on to the next
        pair. Do slow down the animation if you are not able to catch this.
      </p>
      <img src={img} alt='Logo' className='image' />
      <p className='caption'>
        Adjacent pairs in the array are compared and swapped until the largest
        number has gone to the back of the array. This process repeats from the
        start again until the array is sorted.
      </p>
      <br />
      <br />
      <p>
        Refer to the brief algorithm process below and trace it out to
        understand better!
      </p>
      <div className='code'>
        <pre>
          <code>
            bubbleSort(array)
            <br />
            for i &lt;= 1 to indexOfLastUnsortedElement-1
            <br />
            if leftElement &gt; rightElement
            <br />
            swap leftElement and rightElement
            <br />
            <br />
            end bubbleSort
          </code>
        </pre>
      </div>
    </div>
  );
};

export default BubbleSortExplanation;
