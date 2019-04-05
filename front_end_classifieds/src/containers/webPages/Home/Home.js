import React, {Component} from 'react';
import classes from './Home.module.scss';
import fetchCategories from '../../../axios_routes/categories_axios';
import fetchProducts from '../../../axios_routes/products_axios';
import {
  Container,
  Row,
  Col,
  Spinner,
  Form,
  Button
  // Button, Form
} from 'reactstrap';
import CategoriesNav from '../../../components/categoriesDropDown/categoriesDropDown';
import {
  // BrowserRouter as Router,
  Route
} from "react-router-dom";
import Jumbotron from '../../../components/categorisJumbotr/categorisJumbotr';
import AddsCardSection from '../../sections/AddsCardSection';
import Navigation from '../../../components/UI/Navigation/Navigation';
import SingleProductView from '../SingleProductView/SingleProductView';

class Home extends Component {

  state = {
    categories: [], //brands
    subCategories: [],
    color: true,
    active_category: null,
    active_product_id: null,
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

    fetchProducts
      .get()
      .then(res => {
        this.setState({
          ...this.state.productsAll,
          productsAll: res.data
        })
      })
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
        console.log('getChildren---', subCategories.data);
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
    console.log('id FROM home', id)
    fetchProducts
      .get('/' + id)
      .then(res => {
        console.log(res.data);
        this.setState({productsWithCategory: res.data})
      })
      .catch(err => console.log(err))
  }

  getProductsbyBrand = (id) => {
    fetchProducts
      .get('/bybrand/' + id)
      .then(res => {
        console.log(res.data);
        this.setState({productsWithCategory: res.data})
      })
      .catch(err => console.log(err))
  }

  getClickedId = id => {
    console.log(id);
    this.setState({active_product_id: id})
  }

  getProducts = e => {
    e.preventDefault();
    console.log('getProducts', e.target);
    const id = this.state.productId;
    this
      .props
      .getProducts(id)
    //what is this for?
  }

  sayId(id) {
    console.log('id from Home.js', id)
    // return e.target.value
  }

  render() {
    // console.log(this.state.productsWithCategory, typeof
    // this.state.productsWithCategory);

    let jumbotron = <Spinner/>
    if (this.state.categories.length > 0) {
      jumbotron = <Jumbotron // categories aka 'brands' are loaded in 'componentWillMount()'
  categories={this.state.categories} getCategoryId= {(id) => {this.getProductsbyBrand(id);}}/>
    }
    return (
      <div>
        <Navigation/>
        <Container>
          <div className={classes.SearchBar}>
            <div className={classes.Nested}>
              <CategoriesNav
                className={classes.Bar}
                categories={this.state.categories}
                getSubcategories={this.getChildren}
                getAllProducts={this.getProductsWithCategory}
                categoryId={this.getProductsWithCategory}
                context={'home'}/> {/* props to jumbotron sent in render() above return */}
            </div>
          </div>

          {jumbotron}

          <Row>
            <AddsCardSection
              getClickedId={this.getClickedId}
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