import React from "react";
import classes from "./MainText.module.css";

const MainText = (props) => {
  return (
    <div className={classes.MainText}>
      <p className={classes.MainBody}>
        <h1 className={classes.Header}>Visualise Your Code</h1>
        <p>
          See hundreds of algorithms all in one place and contribute to our
          community. `hello world`
        </p>
      </p>
    </div>
  );
};

export default MainText;
