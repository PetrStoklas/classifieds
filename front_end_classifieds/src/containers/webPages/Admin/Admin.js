import React, {Component} from 'react'
import RegisterForm from '../../../components/register_login/register_login';
import {Spinner} from 'reactstrap';
import Form from '../../../components/form/form';
import fetchLogin from '../../../axios_routes/auth_routes';
import getJwt from '../../../utilites/jwt';
import User_admin_section from '../../../components/user_admin_section/user_admin_section';
import Navigation from '../../../components/UI/Navigation/Navigation';
import loginFormSettings from '../../../config_files/loginForm.js';
import TmpForm from '../../../components/form/tmp_form';

class Admin extends Component {

  state = {
    userLoggedIn: false,
    userLoginInfo: {
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
      userLoginInfo: {
        ...this.state.userLoginInfo,
        [e.target.name]: e.target.value
      }
    });
    this.checkForLoggUsr();
  }

  submitForm = e => {
    e.preventDefault();
    fetchLogin
      .post('/register', {
      name: this.state.userLoginInfo.name,
      email: this.state.userLoginInfo.email,
      password: this.state.userLoginInfo.password,
      password_confirmation: this.state.userLoginInfo.password_confirmation
    })
      .then(res => {
        console.log(res.data)
        localStorage.setItem('login-jwt', res.data)
        this.checkForLoggUsr();
      })
  }

  render() {

    console.log(loginFormSettings);
    let form = <Spinner/>

    // form = !this.state.userLoggedIn   ? <Form sumbitForm={this.submitForm}
    // getInputFormValue={this.getInputFormValue}/> : <User_admin_section/>

    form = loginFormSettings.map(formElements => 
    <TmpForm
      type={formElements.type}
      label_for={formElements.label_for}
      title={formElements.label_for}/>);

      
    return (
      <div>
        <Navigation/>
        <h1>Your Admin Page</h1>
        {form}
      </div>
    );
  }
}

export default Admin;