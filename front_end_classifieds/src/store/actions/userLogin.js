import * as actionTypes from './allProductAction';

export const userLoggedIn = () => {
  return {type: actionTypes.USERLOGGEDIN}
}

export const redirect = () => {
  return {type: actionTypes.REDIRECT}
}

export const loginChange = event => {
  console.log('hello from aciton creator')
  return {type: actionTypes.LOGINCHAGED, event: event}
}

export const submintLoginForm = event => {
  return {type: actionTypes.SUBMITLOGINFORM}
}