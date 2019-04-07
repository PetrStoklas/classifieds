export const USERLOGGEDIN = 'USERLOGGEDIN';

export const LOGINCHAGED = 'LOGINCHAGED';
export const SUBMITLOGINFORM = 'SUBMITLOGINFORM';

export const REGISTRATONCHANGED = 'REGISTRATONCHANGED';
export const SUBMITREGISTRATIONFORM = 'SUBMITREGISTRATIONFORM';

export const userLoggedIn = () => {
  return {type: USERLOGGEDIN}
}

export const registrationSubmit = event => {
  return {
    type: SUBMITREGISTRATIONFORM
  }
}

export const registrationChanged = event => {
  return {
    type: REGISTRATONCHANGED,
    event: event
  }
}


export const userLoggedInChange = event => {
  return {
    type: LOGINCHAGED,
    event: event
  }
}

export const submitLoginForm = () => {
  return {
    type: SUBMITLOGINFORM
  }
}

export const sendLoginForm = () => {
  return dispatch => {
    dispatch(submitLoginForm())
  }
}








