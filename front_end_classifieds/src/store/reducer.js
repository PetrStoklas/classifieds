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
    console.log(action);
    if(action.type === 'USERLOGGEDIN'){
      return {
        ...state,
        userLoggedIn: action.payload
      }
    }
    if(action.type === 'REGISTRATONCHANGED'){
      console.log(action.payload.target.value)
      return {
        ...state.userRegistrationInfo,
        name: action.payload
      }
    }

    return state;
}


export default reducer