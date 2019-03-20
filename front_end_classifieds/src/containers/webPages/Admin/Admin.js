import React, {Component} from 'react'
import {Spinner} from 'reactstrap';
import fetchLogin from '../../../axios_routes/auth_routes';
import getJwt from '../../../utilites/jwt';
import User_admin_section from '../../../components/user_admin_section/user_admin_section';
import Navigation from '../../../components/UI/Navigation/Navigation';
import FormComponent from '../../../components/form/form';
import {Form, Button, Container} from 'reactstrap';
import LoginForm from '../../../components/Register/Register';

class Admin extends Component {

  state = {
    userLoggedIn: false,
    userRegistrationInfo: {
      name: null,
      email: null,
      password: null,
      password_confirmation: null
    }

  }

  componentDidMount() {
    this.checkForLoggUsr();
  }

  checkForLoggUsr = () => {
    const jwt = getJwt();
    !jwt
      ? this.setState({userLoggedIn: false})
      : this.setState({userLoggedIn: true});
  }

  getInputFormValue = e => {
    e.preventDefault();
    console.log(e.target.name)
    this.setState({
      userRegistrationInfo: {
        ...this.state.userRegistrationInfo,
        [e.target.name]: e.target.value
      }
    });
    this.checkForLoggUsr();
  }

  submitForm = e => {
    e.preventDefault();
    if(e.target.id = 'register'){
      fetchLogin.post('/register', {
        name: this.state.userRegistrationInfo.name,
        email: this.state.userRegistrationInfo.email,
        password: this.state.userRegistrationInfo.password,
        password_confirmation: this.state.userRegistrationInfo.password_confirmation
      })
      .then(res => {
        localStorage.setItem('login-jwt', res.data)
        this.checkForLoggUsr();
      })
    } else {
      fetchLogin.post('/login', {
        email: this.state.userRegistrationInfo.email,
        password: this.state.userRegistrationInfo.password,
      })
      .then(res => {
        localStorage.setItem('login-jwt', res.data)
        this.checkForLoggUsr();
      })
    }
  }

  render() {

    console.log(this.state.userRegistrationInfo);
    let registrationForm = <Spinner/>

    let content = !this.state.userLoggedIn
      ? (
    <h1>Admin Menu</h1>
      )
      : <User_admin_section/>

    return (
      <div>
        <Navigation/>
        <div className="mt-5"></div>
        <Container>
          {content}
          <LoginForm 
            getinputvalues={this.getInputFormValue}
            submitform={this.submitForm}
          />
        </Container>
      </div>
    );
  }
}

export default Admin;