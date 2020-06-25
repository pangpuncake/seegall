import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import CodeMirrorEditor from './components/CodeMirrorEditor/CodeMirrorEditor';
import Forum from '../src/components/Forum/Forum'
import MainText from './components/MainText/MainText';
import Sorting from './components/Sorting/Sorting'

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          {/* <Route path="/code" component={Checkout} /> */}
          <Route path="/algo" component={Sorting} />
          <Route path="/forum" component={Forum} />
          <Route path="/" exact component={MainText} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
