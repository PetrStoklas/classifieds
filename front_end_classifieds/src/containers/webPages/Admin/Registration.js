import React, {Component} from 'react'
import {connect} from 'react-redux';
import {Button, Spinner} from 'reactstrap';
import getJWT from '../../../utilites/jwt';
import FormComponent from '../../../components/form/form';
import registrationFromSettings from '../../../config_files/registrationForm';
import fetchLogin from '../../../axios_routes/auth_routes';

class RegistrationPage extends Component {


  componentDidMount () {
    let token = getJWT();
    // 
    this.props.userLoggedInStatus(Boolean(token));
  }

  getInputValues = () => {
    console.log(this.props.loggedInStatus)
  }

  submitRegForm = e => {
    e.preventDefault();
    if (e.target.id === 'register') {
      fetchLogin
        .post('/register', {
        name: this.props.userInfoFromInputs.name,
        email: this.props.userInfoFromInputs.email,
        password: this.props.userInfoFromInputs.password,
        password_confirmation: this.props.userInfoFromInputs.password_confirmation
      })
        .then(res => {
          localStorage.setItem('login-jwt', res.data)
          this.checkForLoggUsr();
        })
    }
  }

  render() {

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
      // submitForm={this.submitRegForm}
      />);


    return (
      <div>
        <h1>Registration Page</h1>
        {registrationForm}
        <Button onClick={this.props.registrationFromSubmit} id="register">Register</Button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedInStatus: state.userLoggedIn, 
    userInfoFromInputs: state.userRegistrationInfo,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // submitNewUser: () => dispatch({type: 'REGISTERNEWUSER', payload: 'something'}),
    getInputValues: () => dispatch({type: 'GETINPUTVALUES', payload: 'new user'}),
    userLoggedInStatus: (isLoggedIn) => dispatch({type: 'USERLOGGEDIN', payload: isLoggedIn}),
    formInputEvent: (event) => dispatch({type: 'REGISTRATONCHANGED', payload: event}),
    registrationFromSubmit: () => dispatch({type: 'SUBMITREGISTRATIONFORM'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage);