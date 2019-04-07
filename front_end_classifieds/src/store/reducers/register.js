import fetchLoginRegister from '../../axios_routes/auth_routes';
import {push} from 'react-router-redux'
import * as actionTypes from '../actions/actions';

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

  switch (action.key) {
    case actionTypes.USERLOGGEDIN:
      return {
        ...state,
        userLoggedIn: true
      }

    case actionTypes.REGISTRATONCHANGED:

      console.log(action.event.target.value)
      let newState = {
        ...state
      }
      console.log(action.event.target.value);
      newState.userRegistrationInfo[action.payload.target.name] = action.payload.target.value;

      return newState;

    case actionTypes.SUBMITREGISTRATIONFORM:

      console.log(state);
      fetchLoginRegister
        .post('/register', {
        name: state.userRegistrationInfo.name,
        email: state.userRegistrationInfo.email,
        password: state.userRegistrationInfo.password,
        password_confirmation: state.userRegistrationInfo.password_confirmation
      })
        .then(res => {
          localStorage.setItem('login-jwt', res.data)
          return {
            ...initialState,
            userLoggedIn: true
          }
        })

      default:
      break;
  }

  return state;
}

export default reducer
