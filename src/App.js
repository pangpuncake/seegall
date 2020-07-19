import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Forum from "../src/components/Forum/Forum";
import MainText from "./components/MainText/MainText";
import AlgorithmsPage from "./components/AlgorithmsPage/AlgorithmsPage";
import Drawer from "./components/InputCode/Drawer/Drawer";

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={MainText} />
          <Route path="/algo" component={AlgorithmsPage} />
          <Route path="/create" component={Drawer} />
          <Route path="/forum" component={Forum} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
