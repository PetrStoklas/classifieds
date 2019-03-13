import React, { Component } from 'react';
import Home from './containers/webPages/Home/Home';
import {BrowserRouter} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className="App">
          <Home />
      </div>
    );
  }
}

export default App;
