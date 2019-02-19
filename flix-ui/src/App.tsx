import React, { Component } from "react";
import "./App.css";
import LatestFlix from "./containers/LatestFlix";
import { hot } from "react-hot-loader";
import Details from "./containers/Details";
import CountryDropdown from "./containers/CountryDropdown";
import Tab from "./components/tabs";
import HeaderView from "./components/header";
import Footer from "./components/footer";
import ToolBar from "./components/toolbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderView />
        <ToolBar />
        <LatestFlix />
        <Details />
        <Footer />
      </div>
    );
  }
}

export default App;
