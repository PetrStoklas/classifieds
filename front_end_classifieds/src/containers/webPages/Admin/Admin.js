import React, {Component} from 'react'
import RegisterForm from '../../../components/register_login/register_login';
import {Spinner} from 'reactstrap';
import Form from '../../../components/form/form';

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
    console.log(e.target.value);
    console.log('clicked');
  }

  getInputFormValue = e => {
    e.preventDefault();
    this.setState({
      userLoginInfo: {
        ...this.state,
        [e.target.name]: e.target.value
        // name: e.target.value,
        // password: e.target.value 
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