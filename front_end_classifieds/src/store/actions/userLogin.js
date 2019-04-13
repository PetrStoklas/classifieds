import * as actionTypes from './allProductAction';

export const userLoggedIn = () => {
  return {type: actionTypes.USERLOGGEDIN}
}

export const redirect = () => {
  return {type: actionTypes.REDIRECT}
}

export const registrationChanged = event => {
  return {type: actionTypes.REGISTRATONCHANGED, event: event}
}

export const registrationSubmit = event => {
  return {type: actionTypes.SUBMITREGISTRATIONFORM}
}