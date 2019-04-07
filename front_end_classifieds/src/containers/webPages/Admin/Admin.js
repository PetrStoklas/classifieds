import React, {Component} from 'react'
import {connect} from 'react-redux';
import fetchLogin from '../../../axios_routes/auth_routes';
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
import * as actionTypes from '../../../store/actions/actions';

class Admin extends Component {

  componentDidMount() {
    if (getJwt()) {
      // this.props.userLoggedInStatus();
    }

  }

  render() {

    console.log('render from admin')
    console.log(this.props.loggedInStatus);
    console.log(Boolean(getJwt()));

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
                    : <LoginForm
                      getinputvalues={this.getInputFormValue}
                      submitform={this.submitForm}/>}
                  {/* {this.props.userLoggedIn || getJwt()
                    ? <Redirect to="/admin"/>
                    : 'i need to rerender'} */}
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

                  <Route path='/admin/register' component={RegistrationPage}></Route>
                </Col>
              </Row>
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