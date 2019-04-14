import React, {Component} from 'react'
import {connect} from 'react-redux';
import {Button, Spinner} from 'reactstrap';
import getJwt from '../../../utilites/jwt';
import FormComponent from '../../../components/form/input';
import registrationFromSettings from '../../../config_files/registrationForm';
import * as actionTypes from '../../../store/actions/actionTypes';

import {Redirect, Link} from "react-router-dom";

class RegistrationPage extends Component {

  componentDidMount() {

    if (getJwt()) {
      this
        .props
        .userLoggedInStatus();
    }
  }

  checkForLoggedInUser = () => {
    if (!this.props.loggedInStatus) {
      console.log('no one is logged in');
    }
    this
      .props
      .registrationFromSubmit()

  }

  render() {
    console.log(this.props);
    // if (this.props.loggedInStatus)   return

    let registrationForm = <Spinner/>
    registrationForm = registrationFromSettings.map(formElements => <FormComponent
      key={formElements.label_for}
      generalType={formElements.generalType}
      input_name={formElements.input_name}
      type={formElements.type}
      label_for={formElements.label_for}
      title={formElements.label_for}
      formdata={this.props.formInputEvent}/>);

    return (
      <div>
        {this.props.loggedInStatus
          ? <Redirect to="/admin"/>
          : ''}
        <h1>Registration Page</h1>
        <div>
          {registrationForm}
          <Button onClick={this.checkForLoggedInUser}>Register</Button>
          <Button>
            <Link to="/admin/login">Login</Link>
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {loggedInStatus: state.register.userLoggedIn}
}

const mapDispatchToProps = dispatch => {
  return {
    userLoggedInStatus: (isLoggedIn) => dispatch({type: actionTypes.USERLOGGEDIN, payload: isLoggedIn}),
    formInputEvent: (event) => dispatch(actionTypes.registrationChanged(event)),
    registrationFromSubmit: () => dispatch(actionTypes.registrationSubmit())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage);