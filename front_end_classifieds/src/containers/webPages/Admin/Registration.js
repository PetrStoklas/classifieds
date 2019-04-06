import React, {Component} from 'react'
import {connect} from 'react-redux';
import {Button, Spinner} from 'reactstrap';
import getJwt from '../../../utilites/jwt';
import FormComponent from '../../../components/form/input';
import registrationFromSettings from '../../../config_files/registrationForm';
import * as actionTypes from '../../../store/actions/actions';

import {Redirect} from "react-router-dom";

class RegistrationPage extends Component {

  componentDidMount() {
    
    if (getJwt()) {
      this
        .props
        .userLoggedInStatus();
    }
  }

  checkForLoggedInUser = () => {
    console.log(this.props.loggedInStatus);
    this
      .props
      .registrationFromSubmit()

  }

  render() {
    
    if (this.props.loggedInStatus) 
      return 

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
      <Button onClick={this.checkForLoggedInUser} id="register">Register</Button>
    </div>;

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
    userLoggedInStatus: (isLoggedIn) => dispatch({type: actionTypes.USERLOGGEDIN, payload: isLoggedIn}),
    formInputEvent: (event) => dispatch({type: actionTypes.REGISTRATONCHANGED, payload: event}),
    registrationFromSubmit: () => dispatch({type: actionTypes.SUBMITREGISTRATIONFORM})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage);