import fetchLoginRegister from '../axios_routes/auth_routes';
import {push} from 'react-router-redux'
import jwtCheck from '../utilites/jwt';

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
  
  if (action.type === 'REGISTRATONCHANGED') {
    console.log(action.payload.target.value)
    let newState = {
      ...state
    }

    newState.userRegistrationInfo[action.payload.target.name] = action.payload.target.value;

    return newState;
  }
  if (action.type === 'LOGINCHAGED') {
    console.log(action.payload.target.value)
    let newState = {
      ...state
    }

    newState.userLogInInfo[action.payload.target.name] = action.payload.target.value;

    return newState;
  }

  if (action.type === 'SUBMITREGISTRATIONFORM') {
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
        push('/')
      })
  }

  if (action.type === 'SUBMITLOGINFORM') {
    console.log('clicked')
    fetchLoginRegister
      .post('/login', {
      email: state.userLogInInfo.email,
      password: state.userLogInInfo.password
    })
      .then(res => {
        localStorage.setItem('login-jwt', res.data)
        if(jwtCheck()){
          return {
            ...state,
            userLoggedIn: true
          }
        }
      })
  }

  return state;
}

export default reducer