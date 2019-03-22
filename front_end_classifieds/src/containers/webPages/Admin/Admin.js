import React, {Component} from 'react'
import {connect} from 'react-redux';
// import {Spinner} from 'reactstrap';
import fetchLogin from '../../../axios_routes/auth_routes';
import getJwt from '../../../utilites/jwt';
import UserAdminSection from '../../../components/user_admin_section/user_admin_section';
import Navigation from '../../../components/UI/Navigation/Navigation';
import {
  // Form, Button,
  Container
} from 'reactstrap';
import LoginForm from '../../../components/Register/Register';

class Admin extends Component {

  state = {
    userLoggedIn: false,
    userLogInInfo: {
      email: null,
      password: null
    }

  }

  componentDidMount() {
    let token = getJwt();
    if(token) {
      this.setState({
        ...this.state,
        userLoggedIn: true
      })
    }
  }

  checkForLoggUsr = () => {
    const jwt = getJwt();
    !jwt
      ? this.setState({userLoggedIn: false})
      : this.setState({userLoggedIn: true});
  }

  getInputFormValue = e => {
    e.preventDefault();
    this.setState({
      userLogInInfo: {
        ...this.state.userLogInInfo,
        [e.target.name]: e.target.value
      }
    });
    this.checkForLoggUsr();
  }

  submitForm = e => {
    e.preventDefault();
    fetchLogin
      .post('/login', {
      email: this.state.userLogInInfo.email,
      password: this.state.userLogInInfo.password
    })
      .then(res => {
        localStorage.setItem('login-jwt', res.data)
        this.checkForLoggUsr();
      })
      .catch(err => {
        console.log(err)
        alert('please provide correct login details')
      });
  }

  render() {
    console.log(this.state)
    let content = this.state.userLoggedIn
      ? <UserAdminSection/>
      : <LoginForm
        getinputvalues={this.getInputFormValue}
        submitform={this.submitForm}/>

    return (
      <div>
        <Navigation/>
        <div className="mt-5"></div>
        <Container>
          {content}
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {loggedInStatus: state.userLoggedIn}
}

export default connect(mapStateToProps, null)(Admin);