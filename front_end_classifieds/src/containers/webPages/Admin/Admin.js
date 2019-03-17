import React, {Component} from 'react'
import RegisterForm from '../../../components/register_login/register_login';
import {Spinner} from 'reactstrap';
import Form from '../../../components/form/form';
import fetchLogin from '../../../axios_routes/auth_routes';

class Admin extends Component {

  state = {
    userLoggedIn: true,
    userLoginInfo: {
      name: null,
      password: null
    }
  }

  sumbitForm = e => {
    e.preventDefault();
    fetchLogin.post('/register', {
      name: 'Code Junkie',
      email: this.state.userLoginInfo.email,
      password: this.state.userLoginInfo.password,
      password_confirmation: this.state.userLoginInfo.password
    })
  }

  getInputFormValue = e => {
    e.preventDefault();
    console.log(e.target.name)
    this.setState({
      userLoginInfo: {
        ...this.state.userLoginInfo,
        [e.target.name]: e.target.value
      }
    })
  }

  render() {
    console.log(this.state.userLoginInfo);
    let form = <Spinner/>
    form = !this.state.userLoggedIn
      ? <RegisterForm/>
      : <Form 
        sumbitForm={this.sumbitForm}
        getInputFormValue={this.getInputFormValue}
        />
    return (
      <div>
        <h1>Your Admin Page</h1>
        {form}
      </div>
    );
  }
}

export default Admin;