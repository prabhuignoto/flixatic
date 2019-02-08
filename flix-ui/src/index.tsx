import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import ApolloClient, { StoreReader } from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import WebFont from "webfontloader";
import {Provider} from "react-redux";
import store from "./store";

const Client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL
});

WebFont.load({
  google: {
    families: ["Open Sans:n4,n5"]
  }
});

ReactDOM.render(
  <ApolloProvider client={Client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
