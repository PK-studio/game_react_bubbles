import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { Provider } from 'react-redux';

import "./App.css";
import store from '../Store'
import Screen from './Screen'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Screen />
        </div>
      </Provider>
    );
  }
}

export default hot(module)(App);