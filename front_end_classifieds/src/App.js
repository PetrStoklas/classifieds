import React, {Component} from 'react';
import Home from './containers/webPages/Home/Home';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Admin from './containers/webPages/Admin/Admin';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div> <div id="root">
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/admin' component={Admin}></Route>
        </div>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
