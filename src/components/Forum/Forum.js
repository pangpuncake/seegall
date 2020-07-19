import React, { Component, Fragment } from "react";
import Sidebar from "./Sidebar/Sidebar";
import classes from "./Forum.module.css";
import NewPost from "../Forum/NewPost/NewPost";
import Home from "./Home/Home";
import { Switch, Route } from "react-router-dom";

export class Forum extends Component {
  render() {
    return (
      <Fragment>
        <div className={classes.Forum}>
          <Sidebar />
          <div
            style={{
              backgroundColor: "white",
              width: "100%",
              height: "100%",
              position: "static",
            }}
          >
            <Switch>
              <Route path='/forum/home' component={Home} />
              <Route path='/forum/newpost' component={NewPost} />
            </Switch>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Forum;
