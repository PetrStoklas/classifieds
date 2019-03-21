import React, {Component} from 'react'
import {connect} from 'react-redux';
import {Button, Spinner} from 'reactstrap';
import getJWT from '../../../utilites/jwt';
import FormComponent from '../../../components/form/form';
import registrationFromSettings from '../../../config_files/registrationForm';

class RegistrationPage extends Component {


  componentDidMount () {
    let token = getJWT();
    // 
    this.props.userLoggedInStatus(Boolean(token));
  }

  getInputValues = () => {
    console.log(this.props.loggedInStatus)
  }

  render() {

    console.log(this.props.loggedInStatus);
    console.log(this.props.userInfoFromInputs);

    let registrationForm = <Spinner/>
    registrationForm = registrationFromSettings.map(formElements => <FormComponent
      key={formElements.label_for}
      generalType={formElements.generalType}
      input_name={formElements.input_name}
      type={formElements.type}
      label_for={formElements.label_for}
      title={formElements.label_for}
      formdata={this.props.formInputEvent}
      />);


    return (
      <div>
        <h1>Registration Page</h1>
        {registrationForm}
        <Button onClick={this.props.submitNewUser}>Register</Button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {loggedInStatus: state.userLoggedIn, userInfoFromInputs: state.userRegistrationInfo}
}

const mapDispatchToProps = dispatch => {
  return {
    submitNewUser: () => dispatch({type: 'REGISTERNEWUSER', payload: 'something'}),
    getInputValues: () => dispatch({type: 'GETINPUTVALUES', payload: 'new user'}),
    userLoggedInStatus: (isLoggedIn) => dispatch({type: 'USERLOGGEDIN', payload: isLoggedIn}),
    formInputEvent: (event) => dispatch({type: 'REGISTRATONCHANGED', payload: event})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage);