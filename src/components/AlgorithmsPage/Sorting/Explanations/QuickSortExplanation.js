import React from "react";
import img from "./quick-sort.png";
import "./Explanation.css";

const QuizSortExplanation = (props) => {
  return (
    <div>
      <h2>Quick Sort</h2>
      <p>
        Quick Sort is also another Divide and Conquer, recursive algorithm. It
        chooses an element of the array as a pivot (in our visualisation it is
        the last element) and 'partitions' the arry around this pivot. The
        partition method is especially important as it puts the pivot element at
        its correct position before placing all smaller than pivot elements
        before it and larger after it. To put it simply, while traversing, if we
        find a smaller element, we swap current element with arr[i]. Otherwise
        we ignore current element.
        <br />
        <br />
        Notice from the visualisation, quick sort is very fast. Do increase the
        value on the sorting speed to slow down the animation for your
        understanding.
      </p>
      <img src={img} alt="Logo" className="image" />
      <p className="caption">
        The last element is chosen as a pivot. The array is iterated through and
        when an element smaller than the pivot is encountered, it is swapped.
        (As shown 50-23, 50-9, 23 and 9 are the encountered elements) At the end
        of the swaps, the pivot element is placed before the element at the
        start (50 in this case), and this is repeated until the array is sorted.
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
            quickSort(array, leftmostIndex, rightmostIndex)
            <br />
            if (leftmostIndex &lt; rightmostIndex)
            <br /> pivotIndex &lt;= partition(array,leftmostIndex,
            rightmostIndex)
            <br /> quickSort(array, leftmostIndex, pivotIndex)
            <br /> quickSort(array, pivotIndex + 1, rightmostIndex)
            <br />
            <br /> partition(array, leftmostIndex, rightmostIndex)
            <br />
            set rightmostIndex as pivotIndex
            <br /> storeIndex &lt;= leftmostIndex - 1
            <br /> for i &lt;= leftmostIndex + 1 to rightmostIndex
            <br /> if element[i] &lt; pivotElement
            <br /> swap element[i] and element[storeIndex] storeIndex++
            <br /> swap pivotElement and element[storeIndex+1]
            <br />
            <br /> return storeIndex + 1
          </code>
        </pre>
      </div>
    </div>
  );
};

export default QuizSortExplanation;
