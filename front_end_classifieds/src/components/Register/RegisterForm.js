import React, {Component} from 'react';
import loginForm from '../../config_files/login_form_config'
import {
  // Form, 
  Button, Spinner} from 'reactstrap';
import {
  // BrowserRouter as Router, Route,
  Redirect,
  Link
} from "react-router-dom";
import FormComponent from '../form/input';
import {connect} from 'react-redux';

class LoginFrom extends Component {

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

      console.log(this.props.loggedInStatus);
      
      return (
        <div>
          
          {/* <Form> */}
            {this.createRegisterForm()}
            <Button id="login" onClick={this.props.loginFromSubmit}>
              Submit
            </Button>
            <Button id="register">
              <Link to={'/admin/register'}>Register</Link>
            </Button>
          {/* </Form > */}
        </div>
      )
    }

  }


  const mapStateToProps = state => {
    return {loggedInStatus: state.userLoggedIn}
  }

  const mapDispatchToProps = dispatch => {
    return {
      userLoggedInStatus: (isLoggedIn) => dispatch({type: 'USERLOGGEDIN', payload: isLoggedIn}),
      formInputEvent: (event) => dispatch({type: 'LOGINCHAGED', payload: event}),
      loginFromSubmit: () => dispatch({type: 'SUBMITLOGINFORM'})
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(LoginFrom)