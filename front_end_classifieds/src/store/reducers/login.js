import fetchLoginRegister from '../../axios_routes/auth_routes';
import * as actionTypes from '../actions/actions';


const initialState = {
  userLoggedIn: false,
  userLogInInfo: {
    email: null,
    password: null
  }
}

const reducer = (state = initialState, action) => {

  switch (action.type) {

    case actionTypes.LOGINCHAGED:

      // console.log(action.event.target.value)
      console.log(action.event.target.value)
      let newState = {
        ...state
      }
      newState.userLogInInfo[action.event.target.name] = action.event.target.value;
      return newState;

    case actionTypes.SUBMITLOGINFORM:

      console.log('clicked');
      fetchLoginRegister
        .post('/login', {
        email: state.userLogInInfo.email,
        password: state.userLogInInfo.password
      })
        .then(res => {
          console.log('login success')
          localStorage.setItem('login-jwt', res.data)
          // return {
          //   // ...state,
          //   userLoggedIn: !state.userLoggedIn
          // }
          let newState = {...state};
          newState['userLoggedIn'] = true;
          console.log(newState);
          return newState;
        })
        .catch(err => {
          console.log(err)
        });

        // case actionTypes.redirect:
      

    default:
      return state;
  }

  return state;
}

export default reducer
