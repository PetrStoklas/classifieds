import React from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap';
import {Link} from "react-router-dom";
import SearchForm from '../UI/SearchForm/SearchForm';
// import fetchCategories from '../../axios_routes/categories_axios';

const Categories_nav = props => {
  let categories = '';
  let categoriesType = '';

  if (props.categories) {
    categoriesType = props.categories;
    // console.log('categoriesNav.js----',categoriesType);
  } else if (props.subCats) {
    categoriesType = props.subCats

  }

  //   passing the id to the Home component
  const passingIdMiddleware = (value) => {
    props.getAllProducts(value);
  }

  if (window.innerWidth < 390) {
    categories = categoriesType.map(res => <ListGroupItem key={res.id} onClick={props.getSubcategories}>
      <Link to={"/" + res.name} id={res.id}>{res.name}
      </Link>
    </ListGroupItem>)
  } else {
    categories = <SearchForm
      getProducts={passingIdMiddleware}
      options={props.categories} 
      productsId={props.productsId}
      categories={categoriesType}
      // categoryId={props.category_id} // category_id of new product passed to 'addNewProductForm.js' -> 'Admin.js'
    />
  }

  return (
    <ListGroup flush>
      {categories}
    </ListGroup>
  );

}

export default Categories_nav;
