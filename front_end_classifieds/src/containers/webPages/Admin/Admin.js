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

class Admin extends Component {

  state = {
    userLoggedIn: false,
    userLogInInfo: {
      email: null,
      password: null
    },
    product: {
      name: null,
      description: null,
      price: null,
      uploadedFiles: null,
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

  submitProductForm = e => {
    e.preventDefault();
    fetchProduct
      .post('/create_new_product' , {
        // name of product
        // description of product
        // price
        // image
      })
      .then(res => {

      })
      .catch(err => {
        console.log(err)
        alert('failed to upload your product')
      });
  }

  uploadImageHandler = e => {
    this.setState({uploadedFiles: e.target.files[0]});
  }

  submitImageHandler = () => {
    const fd = new FormData();
    fd.append('image', this.state.uploadedFiles, this.state.uploadedFiles.name);
    axios.post('http://127.0.0.1:8000/api/create_new_product', fd)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
  }

  render() {
    console.log(this.state.uploadedFiles);
    
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
        {/* <form method="post" >
          <input onChange={this.uploadImageHandler} type="file" name="fileToUpload" id="fileToUpload" />
          <input onClick={this.submitImageHandler} value="Upload Image" name="submit" />
        </form> */}
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