import * as actionTypes from './allProductAction';

export const userLoggedInChange = event => {
  return {type: actionTypes.LOGINCHAGED, event: event}
}

export const submitLoginForm = () => {
  return {type: actionTypes.SUBMITLOGINFORM}
}

export const sendLoginForm = () => {
  return dispatch => {
    dispatch(submitLoginForm())
  }
}
