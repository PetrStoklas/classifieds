import React from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap';
import {Link} from "react-router-dom";
import SearchForm from '../UI/SearchForm/SearchForm';
import fetchCategories from '../../axios_routes/categories_axios';

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
      options={props.categories} // kdyz zmenim na categoriesType tak nefunguje
      productsId={props.productsId}
      categories={categoriesType}/>
  }

  return (
    <ListGroup flush>
      {categories}
    </ListGroup>
  );

}

export default Categories_nav;

// export default class Categories_nav extends Component {

//   constructor(props){
//     super(props)
//   }
  
//   state = {
//     categories: [],
//     categoriesType: [],
//   }


//   componentDidMount() {

//     // console.log('props recieved in categoriesNav----',this.props.categories);

//     if (this.props.categories) {
//       this.setState({
//         categoriesType: this.props.categories
//       })
      
      
//       // console.log('categories in categoriesNav.js', this.state.categoriesType);
//       // brands

//     } else if (this.props.subCats) {
//       this.setState({
//         categoriesType: this.props.subCats,
//       })
//       // models

//     }
//   }

//   //passing the id to the Home component
//   passingIdMiddleware(value) {
//     this.props.getAllProducts(value);
//   }

//   render() {
//     // console.log('props assigned to state in categoriesNav+++++', this.state.categoriesType);
//     if (window.innerWidth < 390) {
//       this.state.categories = this.state.categoriesType.map(res => <ListGroupItem key={res.id} onClick={this.props.getSubcategories}>
//         <Link to={"/" + res.name} id={res.id}>{res.name}
//         </Link>
//       </ListGroupItem>)
//     } else {
//       this.state.categories = <SearchForm
//         getProducts={this.passingIdMiddleware}
//         options={this.state.categoriesType}
//         productsId={this.props.productsId}/>
//     }
  
//     return (
//       <ListGroup flush>
//         {this.state.categories}
//       </ListGroup>
//     );
//   }

// }