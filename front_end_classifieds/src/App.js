import React, {Component} from 'react';
import Home from './containers/webPages/Home/Home';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Admin from './containers/webPages/Admin/Admin';

import Card_detail from './components/product_card/product_card_detail';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <>
        <div>
          <div id="root">
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/admin' component={Admin}></Route>
            <Route exact path='/admin/login' component={Admin}></Route>
            <Route exact path='/admin/register' component={Admin}></Route>
          </div>
        </div>
      <Card_detail></Card_detail>

      </> 
      </BrowserRouter>
    );
  }
}

export default App;
