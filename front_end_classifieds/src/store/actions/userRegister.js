import * as actionTypes from './allProductAction';


export const registrationFormChanges = event => {
  return {type: actionTypes.REGISTRATONCHANGED, event: event }
}

export const submitLoginForm = () => {
  return {type: actionTypes.SUBMITREGISTRATIONFORM}
}

export const sendLoginForm = () => {
  return dispatch => {
    dispatch(submitLoginForm())
  }
}
