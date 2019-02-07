import React, { Component } from "react";
import "./App.css";
import LatestFlix from "./containers/LatestFlix";
import { hot } from "react-hot-loader";
import Details from "./containers/Details";
import CountryDropdown from "./containers/CountryDropdown";
import Tab from "./components/tabs";

const view: React.FunctionComponent = () => <div>Prabhu</div>;
const view1: React.FunctionComponent = () => <div>Prabhu Murthy</div>;
const view2: React.FunctionComponent = () => <div>Ramya</div>;

class App extends Component {
  render() {
    return (
      <div className="App">
        <CountryDropdown
          items={[
            { value: "United States", id: "US" },
            { value: "United Kingdom", id: "GB" },
            { value: "India", id: "IN" },
            { value: "Germany", id: "DE" },
            { value: "Japan", id: "JP" },
            { value: "Australia", id: "AU" }
          ]}
          title={"Choose a country"}
        />
        <LatestFlix />
        <Details />
      </div>
    );
  }
}

export default App;
