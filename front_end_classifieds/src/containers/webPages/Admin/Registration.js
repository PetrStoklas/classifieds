import React, {Component} from 'react'
import {connect} from 'react-redux';
import {Button, Spinner} from 'reactstrap';
import getJWT from '../../../utilites/jwt';
import FormComponent from '../../../components/form/form';
import registrationFromSettings from '../../../config_files/registrationForm';
import fetchLogin from '../../../axios_routes/auth_routes';

import {BrowserRouter as Router, Route, Link, Redirect, withRouter} from "react-router-dom";

class RegistrationPage extends Component {

  componentDidMount() {
    let token = getJWT();
    this.props.userLoggedInStatus(Boolean(token));
  }

  render() {

    console.log(this.props.loggedInStatus);

    let registrationForm = <Spinner/>
    registrationForm = registrationFromSettings.map(formElements => <FormComponent
      key={formElements.label_for}
      generalType={formElements.generalType}
      input_name={formElements.input_name}
      type={formElements.type}
      label_for={formElements.label_for}
      title={formElements.label_for}
      formdata={this.props.formInputEvent}/>);

    let regForm = <div>
      {registrationForm}
      <Button onClick={this.props.registrationFromSubmit} id="register">Register</Button>
    </div>;

    if (this.props.loggedInStatus) 
      return <Redirect to="/"/>;
    
    return (
      <div>
        <h1>Registration Page</h1>
        {regForm}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {loggedInStatus: state.userLoggedIn, userInfoFromInputs: state.userRegistrationInfo}
}

const mapDispatchToProps = dispatch => {
  return {
    userLoggedInStatus: (isLoggedIn) => dispatch({type: 'USERLOGGEDIN', payload: isLoggedIn}),
    formInputEvent: (event) => dispatch({type: 'REGISTRATONCHANGED', payload: event}),
    registrationFromSubmit: () => dispatch({type: 'SUBMITREGISTRATIONFORM'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage);