import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import AppNavigator from './App/Navigation/AppNavigation';
import { Provider } from "react-redux";
// import store from "./store";

const AppContainer = createAppContainer(AppNavigator);

class App extends Component {
  render() {
    return (
      // <Provider store={store}>
        <AppContainer />
      // </Provider>
    );
  }
}

export default App;
