import fetchLoginRegister from '../../axios_routes/auth_routes';
import {push} from 'react-router-redux'
import * as actionTypes from '../actions';

const initialState = {
  userLoggedIn: false,
  userLogInInfo: {
    email: null,
    password: null
  }
}

const reducer = (state = initialState, action) => {

  switch (action.type) {

    case actionTypes.USERLOGGEDIN:
      return {
        ...state,
        userLoggedIn: true
      }

    case actionTypes.LOGINCHAGED:

      console.log(action.payload.target.value)
      let newState = {
        ...state
      }

      newState.userLogInInfo[action.payload.target.name] = action.payload.target.value;

      return newState;

    case actionTypes.SUBMITLOGINFORM:

      console.log('clicked');
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

    default:
      break;
  }

  return state;
}

export default reducer
