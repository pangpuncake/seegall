import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import './App.css';
<<<<<<< HEAD
import { Route, Switch } from 'react-router-dom';
// import CodeMirrorEditor from './components/CodeMirrorEditor/CodeMirrorEditor';
import Forum from '../src/components/Forum/Forum'
=======
import MainText from './components/MainText/MainText';
>>>>>>> 384ac102ec8b667505f08a487a80d9777309b76a

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
            {/* <Route path="/code" component={Checkout} />
            <Route path="/algo" component={Orders} /> */}
            <Route path="/forum" component={Forum} />
            <Route path="/" exact component={MainText} />
          </Switch>
      </Layout>
    );
  }
}

export default App;
