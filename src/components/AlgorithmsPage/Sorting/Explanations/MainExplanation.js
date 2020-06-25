import React from "react";

const MainExplanation = (props) => {
  return (
    <div>
      <h1>Welcome to our Sorting Visualiser</h1>
      <p>
        We hope to help you understand some sorting algorithms better through
        animations. We currently host Marge, Bubble and Quick sort but will be
        adding on to our collection soon. Watch our space.
      </p>
      <h3>Generating Arrays</h3>
      <p>
        Get new random arrays to your liking each time with a click of your
        button.
      </p>
      <h3>Sorting Speed</h3>
      <p>
        You can adjust the speed of the animations for clarity. The sorting
        speed decreases from left to right.
      </p>
      <h3>Explanation Tabs</h3>
      <p>
        Still have trouble understanding despite the visualisation? Go to each
        sorting algorithm's tab and you will find detailed explanations that
        complement our visualisation, as well as simple example codes.
      </p>
    </div>
  );
};

export default MainExplanation;
