import React, { Component } from 'react';
import './bootstrap-4.1.3-dist/bootstrap.min.css'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="image">
          <img src={require('./assets/images/Group 4.png')} class='center'/>
        </div>
      </div>
    );
  }
}

export default App;
