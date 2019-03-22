import React, {Component} from 'react'
// import classes from './Home.module.css';
import fetchCategories from '../../../axios_routes/categories_axios';
import fetchProducts from '../../../axios_routes/products_axios';
import {Container, Row, Col, Spinner} from 'reactstrap';
import CategoriesNav from '../../../components/categoriesNav/categoriesNav';
import BrandCard from '../../../components/brandCards/brandCard';
import ProudctCard from '../../../components/productCardTypes/productCardDetail/productCardDetail';

import {
  // BrowserRouter as Router, 
  Route} from "react-router-dom";
import Jumbotron from '../../../components/header/header';
import CardsContainer from '../../sections/AddsCardSection';
import Navigation from '../../../components/UI/Navigation/Navigation';

class Home extends Component {

  state = {
    categories: [],
    subCategories: [],
    color: true,
    active_category: null,
    productsId: null,
    productsAll: [],
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
    fetchProducts
      .get()
      .then(res => this.setState({productsAll: res.data}))
      .catch(err => console.log(err));
    fetchCategories.get()
    // .then(this.setState({subCategories: [...this.state.subCategories: ]}))
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
    this.setState({productsId: id, productsWithCategory: []});
    fetchProducts
      .get('/' + id)
      .then(res => {
        console.log(res.data);
        this.setState({
          productsWithCategory: [
            ...this.state.productsWithCategory,
            res.data
          ]
        })
      })
      .catch(err => console.log(err))

  }

  render() {

    let jumbotron = <Spinner />
    if(this.state.categories.length > 0){
      jumbotron = <Jumbotron 
        categories={this.state.categories}
        getCategoryId = {(id) => {console.log('home', id)}}
      />
    }

    return (
        <> 
        <Navigation/>
        {jumbotron}
        <Container>
          {/* <BrandCard /> */}
          {/* <ProudctCard /> */}

          <Row>
            <Col md="1">
            </Col>
            <Col md="6">
              <Route
                path="/"
                exact
                component={() => <CategoriesNav
                categories={this.state.categories}
                getSubcategories={this.getChildren}
                getAllProducts={this.getProductsWithCategory}/>}/>
              <Route
                path={'/' + this.state.active_category}
                exact
                component=
                {() => <CategoriesNav subCats={this.state.subCategories} productsId={this.state.productsId} /> }/>
            </Col>

            <Col md="5">

            </Col>
          </Row>
          <Row>
            <CardsContainer
              cardsData={(this.state.productsWithCategory.length === 0)
              ? this.state.productsAll
              : this.state.productsWithCategory}/>
          </Row>
        </Container>
      </>
    );
  }
}

export default Home;