import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
<<<<<<< HEAD
import App from './App';
=======
import { createStore } from 'redux';
import reducer from './store/reducer';
import { Provider } from 'react-redux';
>>>>>>> 38d26346349b8cedd3435be711af59d8780e1455

const store = createStore(reducer)


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
