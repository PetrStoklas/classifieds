import React, {Component} from 'react'
// import classes from './Home.module.css';
import fetchCategories from '../../../axios_routes/categories_axios';
import fetchProducts from '../../../axios_routes/products_axios';
import {Container, Row, Col, Spinner} from 'reactstrap';
import CategoriesNav from '../../../components/categoriesNav/categoriesNav';
import {
  // BrowserRouter as Router,
  Route
} from "react-router-dom";
import Jumbotron from '../../../components/header/header';
import CardsSection from '../../sections/AddsCardSection';
import Navigation from '../../../components/UI/Navigation/Navigation';

class Home extends Component {

  state = {
    categories: [],
    subCategories: [],
    color: true,
    active_category: null,
    productsId: null,
    productsAll: [],
    productsWithImages: [],
    productsWithCategory: []
  }

  componentDidMount() {
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
    // Get All Products     
    
    // HOW TO GET IMAGES TO THE PRODUCT ?   getting two arrays ($products AND $images)
    fetchProducts
      .get()
      .then(res => this.setState({
        productsAll: res.data}))
      .catch(err => console.log(err));
    fetchCategories.get()
      // console.log('products and images',this.state.productsAll);
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

  getProductsWithCategory = (id) => {
    // this.setState({productsId: id, productsWithCategory: []});
    fetchProducts
      .get('/' + id)
      .then(res => {
        console.log(res.data);
        this.setState({
          productsWithCategory: res.data
        })
      })
      .catch(err => console.log(err))

  }

  // CAN CHECK IF JSON OBJECT IS FILLED ALREADY
  isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
  }

  render() {


    if (!this.isEmpty(this.state.productsAll)){
      this.state.productsAll.map(product => {
        // console.log('product info', product['product'],'images', product['images']);
      })
      // this.state.productsAll[0].map(product => {
      //   console.log(product);
      // })
  
      // this.state.productsAll[1].map(image => {
      //   console.log(image);
      // })
      
      // console.log('prod and img----', this.state.productsAll);
      // console.log('products----', this.state.productsAll);
      
      
    }
    
    

    let jumbotron = <Spinner/>
    if (this.state.categories.length > 0) {
      jumbotron = <Jumbotron
        categories={this.state.categories}
        getCategoryId=
        {(id) => {this.getProductsWithCategory(id); console.log('home', id)}}/>
    }

    return (
      <div>
        <Navigation/> {jumbotron}
        <Container>
          <Row>
            <Col md="6">

              <Route
                path="/"
                exact
                component={() => <CategoriesNav
                categories={this.state.categories}
                getSubcategories={this.getChildren}
                getAllProducts={this.getProductsWithCategory}/>}
                />
                
              <Route
                path={'/' + this.state.active_category}
                exact
                component=
                {() => <CategoriesNav subCats={this.state.subCategories} productsId={this.state.productsId} /> }/>
            </Col>
          </Row>
          <Row>
            <CardsSection
              cardsData={(this.state.productsWithCategory.length === 0)
              ? this.state.productsAll
              : this.state.productsWithCategory}/>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;