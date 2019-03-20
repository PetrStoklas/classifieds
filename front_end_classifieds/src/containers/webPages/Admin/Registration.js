import React, {Component} from 'react'

class RegistrationPage extends Component {

  state = {
    userLoggedIn: false,
    userRegistrationInfo: {
      name: null,
      email: null,
      password: null,
      password_confirmation: null
    }
  }

  render() {

    return (
      <h1>Registration Page</h1>
    );
  }
}

export default RegistrationPage;
