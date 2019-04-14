import React, {Component} from 'react';
import classes from './Home.module.scss';
import fetchCategories from '../../../axios_routes/categories_axios';
import fetchProducts from '../../../axios_routes/products_axios';
import {
  Container,
  Row,
  Spinner,
} from 'reactstrap';
import CategoriesNav from '../../../components/categoriesDropDown/categoriesDropDown';
import Jumbotron from '../../../components/categorisJumbotr/categorisJumbotr';
import AddsCardSection from '../../sections/AddsCardSection';
import Navigation from '../../../components/UI/Navigation/Navigation';
import SingleProductView from '../SingleProductView/SingleProductView';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions/getAllproducts'

class Home extends Component {

  state = {
    categories: [], //brands
    subCategories: [],
    color: true,
    active_category: null,
    active_product_id: null,
    productsId: null,
    productsWithImages: [],
    productsWithCategory: []
  }

  componentDidMount() {
    this.props.getAllProducts();
    
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
  }

  render() {
    
    // console.log(this.props.products.products);
    // console.log(this.state.productsAll)

    let jumbotron = <Spinner className="ml-5"/>
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
          <div className="d-flex justify-content-center">
            {jumbotron}
          </div>

          <Row>
            <AddsCardSection
              getClickedId={this.getClickedId}
              cardsData={(this.state.productsWithCategory.length === 0)
              // ? this.state.productsAll
              ? this.props.products.products
              : this.state.productsWithCategory}/>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {products: state.getProducts}
}

const mapDispatchToProps = dispatch => {
  return {
    getAllProducts: () => dispatch(actionTypes.getProducts())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);