import React from 'react';
import {ListGroup, 
  // ListGroupItem
} from 'reactstrap';
// import {Link} from "react-router-dom";
import SearchForm from '../UI/SearchForm/SearchForm';
// import fetchCategories from '../../axios_routes/categories_axios';

const Categories_nav = props => {
  let categories = '';
  let categoriesType = '';


  // can be done as an ternary operator in <SearchForm props>
  if (props.categories) {
    categoriesType = props.categories;
    
  } else if (props.subCats) {
    categoriesType = props.subCats
  }
  // ----------------------------------------------------------

  const passIdToHomeOrAdmin = (e) => {
    
    if(props.context === 'admin'){      
      // props.catId(e.target.value)
    }
    else if(props.context === 'home'){
      props.categoryId(e.target.value);
    }
  }

  
  //   passing the id to the Home component
  const passingIdMiddleware = (value) => {
    props.getAllProducts(value);
  }

  // if (window.innerWidth < 390) {
  //   categories = categoriesType.map(res => <ListGroupItem key={res.id} onClick={props.getSubcategories}>
  //     <Link to={"/" + res.name} id={res.id}>{res.name}
  //     </Link>
  //   </ListGroupItem>)
  // } else {
    categories = <SearchForm
      getProducts={passingIdMiddleware}
      options={props.categories} 
      categories={categoriesType}
      context={props.context}

      productsId={props.productsId}
      categoryId={passIdToHomeOrAdmin} 
      // getCategoryIdForHome={passIdToHome}
      // category_id of new product passed to 'addNewProductForm.js' -> 'Admin.js'
    />
  // }

  // console.log(props);

  return (
    <ListGroup flush>
      {categories}
    </ListGroup>
  );

}

export default Categories_nav;
