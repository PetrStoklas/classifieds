import fetchLoginRegister from '../axios_routes/auth_routes';
import {push} from 'react-router-redux'
import * as actionTypes from './actions';

const initialState = {
  userLoggedIn: false,
  userRegistrationInfo: {
    name: null,
    email: null,
    password: null,
    password_confirmation: null
  },
  userLogInInfo: {
    email: null,
    password: null
  }
}

const reducer = (state = initialState, action) => {

  if(action.type === actionTypes.USERLOGGEDIN){
    return {
      ...state,
      userLoggedIn: true,
    }
  }


  if (action.type === actionTypes.REGISTRATONCHANGED) {
    console.log(action.payload.target.value)
    let newState = {
      ...state
    }

    newState.userRegistrationInfo[action.payload.target.name] = action.payload.target.value;

    return newState;
  }
  // getting the values from the login form here
  if (action.type === actionTypes.LOGINCHAGED) {
    console.log(action.payload.target.value)
    let newState = {
      ...state
    }

    newState.userLogInInfo[action.payload.target.name] = action.payload.target.value;

    return newState;
  }
  // getting the values from the registration form here
  if (action.type === actionTypes.SUBMITREGISTRATIONFORM) {
    console.log(state)
    fetchLoginRegister
      .post('/register', {
      name: state.userRegistrationInfo.name,
      email: state.userRegistrationInfo.email,
      password: state.userRegistrationInfo.password,
      password_confirmation: state.userRegistrationInfo.password_confirmation
    })
      .then(res => {
        localStorage.setItem('login-jwt', res.data)
        push('/admin')
        return {
          ...state,
          userLoggedIn: true
        }
      })
  }

  if (action.type === actionTypes.SUBMITLOGINFORM) {
    console.log('clicked')
    fetchLoginRegister
      .post('/login', {
      email: state.userLogInInfo.email,
      password: state.userLogInInfo.password
    })
      .then(res => {
        localStorage.setItem('login-jwt', res.data)
        push('/admin')
        return {
          ...state,
          userLoggedIn: true
        }
      })
      .catch(err => console.log(err));
  }


  return state;
}

export default reducer