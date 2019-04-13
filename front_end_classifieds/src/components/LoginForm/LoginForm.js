import React, {Component} from 'react';
import loginForm from '../../config_files/login_form_config'
import {
  // Form,
  Button,
  Spinner
} from 'reactstrap';
import {
  // BrowserRouter as Router, Route,
  Redirect,
  Link
} from "react-router-dom";
import FormComponent from '../form/input';
import {connect} from 'react-redux';
import getJwt from '../../utilites/jwt';
import * as actionTypes from '../../store/actions/actions';

class LoginFrom extends Component {

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    console.log('something');
    if (nextProps.loggedInStatus) {
      this.props.router.push('/');
    }
  }

  createRegisterForm = () => {
    let registrationForm = <Spinner/>

    registrationForm = loginForm.map(formElements => <FormComponent
      key={formElements.label_for}
      generalType={formElements.generalType}
      input_name={formElements.input_name}
      type={formElements.type}
      label_for={formElements.label_for}
      title={formElements.label_for}
      formdata={this.props.formInputEvent}/>);

    return registrationForm;
  }

  render() {
    console.log('login form updated');
    console.log(this.props);
    if(this.props.loggedInStatus){
      console.log('user logged in');
    }

    return (
      <div>
      {this.props.userLoggedIn || getJwt()
                    ? <Redirect to="/admin"/>
                    : 'i need to rerender'}
        {this.createRegisterForm()}
        <Button id="login" onClick={this.props.loginFromSubmit}>
          Submit
        </Button>
        <Button id="register">
          <Link to={'/admin/register'}>Register</Link>
        </Button>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    loggedInStatus: state.login.userLoggedIn
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // userLoggedInStatus: () => dispatch(actionTypes.userLoggedIn()), payload:
    // isLoggedIn
    formInputEvent: (event) => dispatch(actionTypes.userLoggedInChange(event)),
    loginFromSubmit: () => dispatch(actionTypes.submitLoginForm())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginFrom)