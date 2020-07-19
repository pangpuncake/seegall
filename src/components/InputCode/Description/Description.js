import React from "react";

const Description = () => {
  return (
    <div style={{ textAlign: "left", paddingBottom: "2%" }}>
      <h1>Description:</h1>
      <section>
        <h2>Usage:</h2>
        The code input below ONLY supports Javascript. You can choose any of the
        base code for the provided sorts. Feel free to modify them as you'd
        like. If you would like to create your own sort and test it, you have to
        add in commands into your code to create the animations. The commands
        mimic what happens typically in a common sorting algorithm. Once
        finished creating your sort, click on Build, and run the sequence if
        successful.
        <h2>Commands:</h2>
        <code>
          Base command: <pre>command(type, fromIndex, toIndex)</pre>
        </code>
        <h3>Supported Commands:</h3>
        <code>
          <pre>command("swap", fromIndex, toIndex)</pre> - Swaps the elements at
          fromIndex and toIndex.
        </code>
        <code>
          <pre>command("insert", fromIndex, toIndex)</pre> - Inserts the element
          at fromIndex into the array at toIndex.
        </code>
      </section>
    </div>
  );
};

export default Description;
