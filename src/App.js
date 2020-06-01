import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import './App.css';
import MainText from './components/MainText/MainText';

class App extends Component {
  render() {
    return (
      <Layout>
        <div>
          <MainText />
        </div>
      </Layout>
    );
  }
}

export default App;
