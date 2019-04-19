import * as actionTypes from './allProductAction';


export const loginChange = event => {
  console.log('login action creator')
  return {type: actionTypes.LOGINCHAGED, event: event}
}

export const submintLoginForm = event => {
  return {type: actionTypes.SUBMITLOGINFORM}
}