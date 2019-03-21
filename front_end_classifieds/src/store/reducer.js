import fetchLogin from '../axios_routes/auth_routes';
import {BrowserRouter as Router, Route, Link, Redirect, withRouter} from "react-router-dom";

const initialState = {
  userLoggedIn: false,
  userRegistrationInfo: {
    name: null,
    email: null,
    password: null,
    password_confirmation: null
  }
}

const reducer = (state = initialState, action) => {
    // console.log(action);
    if(action.type === 'USERLOGGEDIN'){
      return {
        ...state,
        userLoggedIn: action.payload
      }
    }
    if(action.type === 'REGISTRATONCHANGED'){
      console.log(action.payload.target.value)
      console.log(state.name)
      return {
        ...state.userRegistrationInfo,
        name: action.payload.target.value,
        email: action.payload.target.value,
        password: action.payload.target.value,
        password_confirmation: action.payload.target.value,
      }
    }


    if(action.type === 'SUBMITREGISTRATIONFORM'){
      
      fetchLogin.post('/register', {
        name: state.name,
        email: state.email,
        password: state.password,
        password_confirmation: state.password_confirmation
      })
      .then(res => {
        localStorage.setItem('login-jwt', res.data)
      })
    }

    return state;
}


export default reducer