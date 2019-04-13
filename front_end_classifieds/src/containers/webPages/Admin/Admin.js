import React, {Component} from 'react'
import {connect} from 'react-redux';
import getJwt from '../../../utilites/jwt';
import {Container, Row, Col} from 'reactstrap';
import LoginForm from '../../../components/LoginForm/LoginForm';
import {
  BrowserRouter as Router, Route,
  // Link, withRouter
  Redirect
} from "react-router-dom";
import AddNewProductForm from '../../../components/forms/addNewProductForm';
import Navigation from '../../../components/UI/Navigation/Navigation';
import AdminNavigatoion from '../../../components/UI/AdminNavigatoion/AdminNavigatoion'
import AdminProductList from '../../../components/AdminProductList/AdminProductList';
import RegistrationPage from '../Admin/Registration';

class Admin extends Component {

  componentWillUpdate() {
    if (getJwt()) {
      this
        .props
        .loggedInStatus();
    }

  }


  render() {


    let currentLocUrl = '/admin'; //this.props.location.pathname; -- throwing an error
    
    return (
      <div>
        <div>
          <Navigation/>
          <div className="mt-5"></div>
          <Router>
            <Container>
              <Row>
                <Col md='4'>
                  {this.props.loggedInStatus || getJwt()
                    ? <AdminNavigatoion/>
                    : <Redirect to="/admin/login"/>}
                </Col>
                <Col md='8'>
                  <Route
                    exact
                    path={currentLocUrl + '/add_product'}
                    component={() => <AddNewProductForm/>}></Route>
                  <Route
                    exact
                    path={currentLocUrl + '/allProductsList'}
                    component={() => <AdminProductList/>}></Route>
                </Col>
              </Row>
              <Route
                path={currentLocUrl + '/login'}
                component={() => 
                <LoginForm
                getinputvalues={this.getInputFormValue}
                submitform={this.submitForm}/>}>
              </Route>
              <Route path={currentLocUrl + '/register'} component={RegistrationPage}></Route>
            </Container>
          </Router>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {loggedInStatus: state.login.userLoggedIn}
}

// const mapDispatchToProps = dispatch => {   return {     userLoggedInStatus:
// (isLoggedIn) => dispatch({type: actionTypes.USERLOGGEDIN, payload:
// isLoggedIn}),   } }

export default connect(mapStateToProps, null)(Admin);