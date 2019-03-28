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
import { BrowserRouter as Router, Route, Link, withRouter} from "react-router-dom";
import AddNewProductForm from '../../../components/forms/addNewProductForm';
import Navigation from '../../../components/UI/Navigation/Navigation';
import AdminNavigatoion from '../../../components/UI/AdminNavigatoion/AdminNavigatoion'
import fetchCategories from '../../../axios_routes/categories_axios';


class Admin extends Component {

  state = {
    userLoggedIn: false,
    userLogInInfo: {
      email: null,
      password: null
    },
    newProduct: {
      title: null,
      description: null,
      price: null,
      category_id: null,
      uploadedFiles: null, //image file
      mileage: null,
      cubic_capacity: null,
      door_count: null,
      year: null,
      cylinder: null,
      registered: null,
      power: null,
      emission_class: null,
      color: null,
      interior: null,
      gearbox: null,
      fuel: null,
    },
    categories: [],
    subCategories: [],
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
  // setNewProductCategoryId = (e) => {
  //   // console.log('setting category_id state', e.target.value);
  //   this.setState({
  //     newProduct: {
  //       ...this.state.newProduct,
  //       category_id: e.target.value,
  //     }
  //   })
  //   // console.log('state set---', this.state.newProduct);
  // }

  getInputFormValue = e => {
    e.preventDefault();
    // redo with ternary operator

    if (this.state.userLoggedIn) { //if user is logged in -> we are creating new product 
      if (e.target.id === 'original_filename') { // if image -> using e.target.files insead of e.target.value

        // console.log('image upload touched');
        // console.log(e.target.files);
        this.setState({
          newProduct: {
            ...this.state.newProduct,
            uploadedFiles: e.target.files,
          }
        });

      } else {
        this.setState({
          newProduct: {
            ...this.state.newProduct,
            [e.target.id]: e.target.value, 
          }
        })
        console.log(e.target.id, '=', e.target.value);
      }
      
    } else {
      // console.log('user se logging in')
      this.setState({
        userLogInInfo: {
          ...this.state.userLogInInfo,
          [e.target.name]: e.target.value
        }
      });
      
    }
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

  submitProductForm = e => { // NEW PRODUCT FORM SUBMIT
    e.preventDefault();
   
    let fd = new FormData();   
    fd.append('image', this.state.newProduct.uploadedFiles[0]);
    fd.append('title', this.state.newProduct.title);
    fd.append('price', this.state.newProduct.price);
    fd.append('description', this.state.newProduct.description);
    fd.append('category_id', this.state.newProduct.category_id);
    fd.append('mileage', this.state.newProduct.mileage);
    fd.append('cubic_capacity', this.state.newProduct.cubic_capacity);
    fd.append('door_count', this.state.newProduct.door_count);
    fd.append('year', this.state.newProduct.year);
    fd.append('cylinder', this.state.newProduct.cylinder);
    fd.append('registered', this.state.newProduct.registered);
    fd.append('power', this.state.newProduct.power);
    fd.append('emission_class', this.state.newProduct.emission_class);
    fd.append('color', this.state.newProduct.color);
    fd.append('interior', this.state.newProduct.interior);
    fd.append('gearbox', this.state.newProduct.gearbox);
    fd.append('fuel', this.state.newProduct.fuel);

    // fd.append('category_id', 1); // needs to be dynamic 

    fetchProduct
      .post('/', fd,{
        headers: {
          'Content-Type': 'multipart/form-data'
        }  
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err)
        alert('failed to upload your product')
      });
  }

  sayId(id){
    console.log('id from Admin.js',id)
    // return e.target.value
  }  
  
  render() {
    console.log(this.props.location.pathname);
    let content = this.state.userLoggedIn
      ? <div>
          {/* <UserAdminSection/> */}
          <AddNewProductForm
            getinputvalues={this.getInputFormValue} 
            submitform={this.submitProductForm}
            categories={this.state.categories} 
            subCats={this.state.subCategories}
            catId={this.sayId}
            context={'admin'}
            // category_id={this.setNewProductCategoryId} // getting the category_id from 'SearchForm.js'
            // category_id={}           
          />
        </div>

      : <div> 
          <LoginForm
            getinputvalues={this.getInputFormValue}
            submitform={this.submitForm}
          />
        </div>

    return (
      <Router>
        <div>
          <Navigation/>
          <div className="mt-5"></div>
          <Container>
            <Row>
              <Col md='4'>
              <AdminNavigatoion/>
              </Col>
              <Col md='8'>
                {/* <Route exact path='/admin' component={Admin}></Route> */}
                <Route exact path='/admin/add_product' component={() => content} ></Route>
              </Col>
            </Row>
          </Container>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {loggedInStatus: state.userLoggedIn}
}

export default connect(mapStateToProps, null)(Admin);