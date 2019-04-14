import * as actionTypes from './actionTypes';

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
