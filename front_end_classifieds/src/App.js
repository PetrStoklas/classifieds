import React, {Component} from 'react';
import Home from './containers/webPages/Home/Home';
import {
  BrowserRouter, Route,
  // Link
} from 'react-router-dom';
import Admin from './containers/webPages/Admin/Admin';
import SingleProductView from './containers/webPages/SingleProductView/SingleProductView';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div id="root">
            <Route exact path='/' component={Home}></Route>
            <Route path='/admin' component={Admin}></Route>
            <Route path={'/product/:product_id'} component={SingleProductView}/>             
            
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
