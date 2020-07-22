import React, { useContext } from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";
import AuthContext from "../../../context/AuthContext/AuthContext";
import { connect } from "react-redux";
import * as actions from "../../../../store/actions/index";
import Dropdown from "../Dropdown/Dropdown";
// import Menu from "../Dropdown/Menu";

const NavigationItems = (props) => {
  const authContext = useContext(AuthContext);

  const logoutHandler = () => {
    props.onLogout();
  };

  console.log("auth props below");
  console.log(props);

  let authLogin = !props.loggedIn ? (
    <li
      className={classes.NavigationItem}
      onClick={authContext.showLoginHandler}
    >
      <p>Log In</p>
    </li>
  ) : (
    <li className={classes.NavigationItem} onClick={logoutHandler}>
      <p>Log Out</p>
    </li>
  );

  return (
    <ul className={classes.NavigationItems}>
      <Dropdown />
      <NavigationItem link="/create">Create</NavigationItem>
      <NavigationItem link="/forum/home">Forum</NavigationItem>
      {authLogin}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    loggedIn: state.auth.loggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch(actions.logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationItems);
