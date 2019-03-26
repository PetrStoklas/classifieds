import React, {Component} from 'react'
import {connect} from 'react-redux';
// import {Spinner} from 'reactstrap';
import fetchProduct from '../../../axios_routes/products_axios';
import fetchLogin from '../../../axios_routes/auth_routes';
import getJwt from '../../../utilites/jwt';
import UserAdminSection from '../../../components/user_admin_section/user_admin_section';
import Navigation from '../../../components/UI/Navigation/Navigation';
import {
  // Form, Button,
  Container
} from 'reactstrap';
import LoginForm from '../../../components/Register/RegisterForm';
import axios from 'axios';
import AddNewProductForm from '../../../components/forms/addNewProductForm';

// import axios from 'axios';

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
      uploadedFiles: null, //image file
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

    
    fd.append('category_id', 1); // needs to be dynamic 

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
    
    let content = this.state.userLoggedIn
      ? <div>
          {/* <UserAdminSection/> */}
          <AddNewProductForm
            getinputvalues={this.getInputFormValue} 
            submitform={this.submitProductForm}            
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