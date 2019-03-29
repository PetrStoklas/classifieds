import React, {Component} from 'react'
import {connect} from 'react-redux';
// import {Spinner} from 'reactstrap';
import fetchProduct from '../../../axios_routes/products_axios';
import fetchLogin from '../../../axios_routes/auth_routes';
import getJwt from '../../../utilites/jwt';
import {
  // Form, Button,
  Container,
  Row,
  Col
} from 'reactstrap';
import LoginForm from '../../../components/Register/RegisterForm';
import {BrowserRouter as Router, Route, Link, withRouter} from "react-router-dom";
import AddNewProductForm from '../../../components/forms/addNewProductForm';
import Navigation from '../../../components/UI/Navigation/Navigation';
import AdminNavigatoion from '../../../components/UI/AdminNavigatoion/AdminNavigatoion'
import fetchCategories from '../../../axios_routes/categories_axios';
import AdminProductList from '../../../components/AdminProductList/AdminProductList';

class Admin extends Component {

  state = {
    userLoggedIn: false,
    userLogInInfo: {
      email: null,
      password: null
    },
    
    categories: [],
    subCategories: []
  }

  componentDidMount() {

    let token = getJwt();
    if (token) {
      this.setState({
        ...this.state,
        userLoggedIn: true
      })
    }

    fetchCategories
      .get()
      .then(categories => {
        categories
          .data
          .map(res => {
            if (!res.parent_id) {
              return (this.setState({
                categories: [
                  ...this.state.categories,
                  res
                ]
              }))
            }
            return null;
          });
      })
      .catch(err => console.log(err));

  }

  getChildren = e => {
    this.setState({active_category: e.target.textContent, subCategories: []})
    let id = e.target.id
    fetchCategories
      .get('/' + id)
      .then(subCategories => {
        subCategories
          .data
          .map(res => {
            return (this.setState({
              subCategories: [
                ...this.state.subCategories,
                res
              ]
            }))
          })
      })
      .catch(err => console.log(err));
  }

  checkForLoggUsr = () => {
    const jwt = getJwt();
    !jwt
      ? this.setState({userLoggedIn: false})
      : this.setState({userLoggedIn: true});
  }

  // // here we get category_id from 'SearchForm.js' when creating new product
  // setNewProductCategoryId = (e) => {   // console.log('setting category_id
  // state', e.target.value);   this.setState({     newProduct: {
  // ...this.state.newProduct,       category_id: e.target.value,     }   })   //
  // console.log('state set---', this.state.newProduct); }

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

  submitForm = e => { // USER LOGIN SUBMIT
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

    let content = this.state.userLoggedIn
      ? <div>
          {/* <UserAdminSection/> */}
          <AddNewProductForm
            getinputvalues={this.getInputFormValue}
            submitform={this.submitProductForm}
            categories={this.state.categories}
            subCats={this.state.subCategories}
            // catId={this.sayId}
            context={'admin'}/>
        </div>

      : <div>
        <LoginForm
          getinputvalues={this.getInputFormValue}
          submitform={this.submitForm}/>
      </div>
    let currentLocUrl = this.props.location.pathname;

    return (
      <div>
        <Navigation/>
        <div className="mt-5"></div>
        <Router>
          <Container>
            <Row>
              <Col md='4'>
                <AdminNavigatoion/>
              </Col>
              <Col md='8'>
                <Route exact path={currentLocUrl + '/add_product'} component={() => content}></Route>
                <Route
                  exact
                  path={currentLocUrl + '/allProductsList'}
                  component={() => <AdminProductList/>}></Route>
              </Col>
            </Row>
          </Container>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {loggedInStatus: state.userLoggedIn}
}

export default connect(mapStateToProps, null)(Admin);