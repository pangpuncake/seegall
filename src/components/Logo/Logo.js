import React from "react";
import SeegallLogo from "../../assets/images/bluelogo1.png";
import classes from "./Logo.module.css";

const Logo = (props) => {
  return (
    <div
      className={classes.Logo}
      style={{
        height: props.height,
        backgroundColor: props.backgroundColor,
      }}
      onClick={props.clicked}
    >
      <img src={SeegallLogo} alt="seegall" />
      {props.children}
    </div>
  );
};

export default Logo;
