import React, { Component } from 'react';
//import './bootstrap-4.1.3-dist/bootstrap.min.css'
import './App.css';
import Layout from './components/Layout/Layout';
import Homepage from '../src/containers/Homepage.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Homepage/>
        </Layout>
      </div>
    );
  }
}

export default App;
