import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import login from './store/reducers/login';
import register from './store/reducers/register';
import getProducts from './store/reducers/getAllProducts';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';


const rootReducer = combineReducers({
  login,
  register,
  getProducts,
});


const store = createStore(
  rootReducer,  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}><App/></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls. Learn
// more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
