import React, {Component} from 'react';
import Home from './containers/webPages/Home/Home';
import {
  BrowserRouter, Route,
  // Link
} from 'react-router-dom';
import Admin from './containers/webPages/Admin/Admin';
import RegistrationPage from './containers/webPages/Admin/Registration';
import SingleProductView from './components/UI/Navigation/Navigation';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div id="root">
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/admin' component={Admin}></Route>
            <Route exact path='/admin/login' component={Admin}></Route>
            <Route exact path='/admin/register' component={RegistrationPage}></Route>
            {/* <Route path={'/products'} exact component={SingleProductView}/> */}
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
