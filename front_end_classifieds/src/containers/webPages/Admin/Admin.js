import React, {Component} from 'react'
import {connect} from 'react-redux';
import fetchLogin from '../../../axios_routes/auth_routes';
import getJwt from '../../../utilites/jwt';
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import LoginForm from '../../../components/Register/RegisterForm';
import {BrowserRouter as Router, Route, Link, withRouter} from "react-router-dom";
import AddNewProductForm from '../../../components/forms/addNewProductForm';
import Navigation from '../../../components/UI/Navigation/Navigation';
import AdminNavigatoion from '../../../components/UI/AdminNavigatoion/AdminNavigatoion'
import AdminProductList from '../../../components/AdminProductList/AdminProductList';
import RegistrationPage from '../Admin/Registration';

class Admin extends Component {

  

  

  

  render() {

    console.log(this.props);
    let content = this.props.userLoggedIn
      ? <div></div>

      : <div></div>
    let currentLocUrl = '/admin'; //this.props.location.pathname;
    return (
      <div>
        {/* {content} */}
        <div>
          <Navigation/>
          <div className="mt-5"></div>
          <Router>
            <Container>
              <Row>
                <Col md='4'>
                  {this.props.userLoggedIn
                    ? <AdminNavigatoion/>
                    : <LoginForm
                      getinputvalues={this.getInputFormValue}
                      submitform={this.submitForm}/>}
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
  const { loggedIn } = state
  return {loggedInStatus: state.userLoggedIn}
}



export default connect(mapStateToProps, null)(Admin);