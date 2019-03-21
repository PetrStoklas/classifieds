import fetchLogin from '../axios_routes/auth_routes';

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
  if (action.type === 'USERLOGGEDIN') {
    return {
      ...state,
      userLoggedIn: action.payload
    }
  }
  if (action.type === 'REGISTRATONCHANGED') {
    console.log(action.payload.target.value)
    let newState = {
      ...state
    }

    newState.userRegistrationInfo[action.payload.target.name] = action.payload.target.value;

    return newState;
  }

  if (action.type === 'SUBMITREGISTRATIONFORM') {
    console.log(state)
    fetchLogin
      .post('/register', {
      name: state.userRegistrationInfo.name,
      email: state.userRegistrationInfo.email,
      password: state.userRegistrationInfo.password,
      password_confirmation: state.userRegistrationInfo.password_confirmation
    })
      .then(res => {
        localStorage.setItem('login-jwt', res.data)
      })
  }

  return state;
}

export default reducer