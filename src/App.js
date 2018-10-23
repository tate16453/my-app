import React, { Component } from 'react';
import './bootstrap-4.1.3-dist/bootstrap.min.css'
import './App.css';
import Layout from './components/Layout/Layout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
        <div className="image">
          <img src={require('./assets/images/Group 4.png')} class='center' alt='campus bar'/>
        </div>
        </Layout>
      </div>
    );
  }
}

export default App;
