export const USERLOGGEDIN = 'USERLOGGEDIN';

export const LOGINCHAGED = 'LOGINCHAGED';
export const SUBMITLOGINFORM = 'SUBMITLOGINFORM';

export const REGISTRATONCHANGED = 'REGISTRATONCHANGED';
export const SUBMITREGISTRATIONFORM = 'SUBMITREGISTRATIONFORM';


export const userLoggedInChange = event => {
  return {
    type: LOGINCHAGED,
    event: event
  }
}


