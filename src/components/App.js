import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { Provider } from 'react-redux';

import "./App.css";
import Store from '../Store'
import DisplayExample from './DisplayExample'

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <div className="App">
          <h1> Hello, World! </h1>
          <DisplayExample />
        </div>
      </Provider>
    );
  }
}

export default hot(module)(App);