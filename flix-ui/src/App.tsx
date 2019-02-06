import React, { Component } from 'react';
import './App.css';
import LatestFlix from './containers/LatestFlix';
import {hot} from "react-hot-loader";
import Details from './containers/Details';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LatestFlix />
        <Details />
      </div>
    );
  }
}

export default App;
