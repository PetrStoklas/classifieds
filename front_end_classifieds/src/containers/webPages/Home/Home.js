import React, {Component} from 'react'
import classes from './Home.module.css';
import categories from '../../../axios_routes/categories_axios';
import {Container, Row, Col} from 'reactstrap';
import CategoriesNav from '../../../components/categories_nav/categories_nav';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Jumbotron from '../../../components/header/header';
import CardsContainer from '../../sections/AddsCardSection';
import fetchProducts from '../../../axios_routes/products_axios';

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
    categories
      .get()
      .then(categories => {
        categories
          .data
          .map(res => {
            if (!res.parent_id) {
              this.setState({
                categories: [
                  ...this.state.categories,
                  res
                ]
              })
            }
          });
      })
      .catch(err => console.log(err));
    fetchProducts
      .get()
      .then(res => this.setState({productsAll: res.data}))
      .catch(err => console.log(err));
  }

  getChildren = e => {
    this.setState({active_category: e.target.textContent, subCategories: []})
    categories
      .get('/' + e.target.id)
      .then(subCategories => {
        subCategories
          .data
          .map(res => {
            this.setState({
              subCategories: [
                ...this.state.subCategories,
                res
              ]
            })
          })
      })
      .catch(err => console.log(err));
  }

  getProductsWithCategory = (id) => {
    this.setState({productsId: id});
    fetchProducts
      .get('/' + id)
      .then(res => {
        this.setState({productsWithCategory: res.data})
      })
      .catch(err => console.log(err))

  }

  render() {

    return (
      <Router>
        <> <Jumbotron/>
        <Container>
          <Row>
            <Col md="1">
              <p
                className={this.state.color
                ? classes.Red
                : ''}></p>

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
                component=
                {() => <CategoriesNav subCats={this.state.subCategories} productsId={this.state.productsId} /> }/>
            </Col>

            <Col md="5">
              <p
                className={this.state.color
                ? classes.Red
                : ''}></p>

            </Col>
          </Row>
          <Row>
            <CardsContainer cardsData={this.state.productsAll}/>
          </Row>
        </Container>
      </>
    </Router>
    );
  }
}

export default Home;