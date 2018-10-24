/* Home page to be use in App.js */

import React, { Component } from 'react';
import '../bootstrap-4.1.3-dist/bootstrap.min.css'
import './Homepage.css';

class Homepage extends Component {
    render() {
        return (
            <div className="image">
              <img src={require('../assets/images/Group 4.png')} class='center' alt='campus bar'/>
            </div>
        );
    }
}

export default Homepage;
