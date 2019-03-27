import React, {Component} from 'react'
import {connect} from 'react-redux';
// import {Spinner} from 'reactstrap';
import fetchProduct from '../../../axios_routes/products_axios';
import fetchLogin from '../../../axios_routes/auth_routes';
import getJwt from '../../../utilites/jwt';
// import UserAdminSection from '../../../components/user_admin_section/user_admin_section';
import {
  // Form, Button,
  Container
} from 'reactstrap';
import LoginForm from '../../../components/Register/RegisterForm';
// import axios from 'axios';
import AddNewProductForm from '../../../components/forms/addNewProductForm';
import Navigation from '../../../components/UI/Navigation/Navigation';
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
  
  render() {

    // console.log('admin.js state----', this.state);
    
    let content = this.state.userLoggedIn
      ? <div>
          {/* <UserAdminSection/> */}
          <AddNewProductForm
            getinputvalues={this.getInputFormValue} 
            submitform={this.submitProductForm}
            categories={this.state.categories} 
            subCats={this.state.subCategories}
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