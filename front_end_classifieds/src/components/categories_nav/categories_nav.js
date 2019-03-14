import React from 'react';
import { ListGroup, ListGroupItem, Form } from 'reactstrap';
import { Link } from "react-router-dom";
import SearchForm from '../UI/SearchForm/SearchForm';


const Categories_nav = props => {
    let categories = '';

        let categoriesType = '';

        let subs = '';
        
        if(props.categories) {
            categoriesType = props.categories;
        } else if(props.subCats) {
            categoriesType = props.subCats
            
        }

        const test = (value) => {
            props.getAllProducts(value);
        }

        
        if(window.innerWidth < 390){
            categories = categoriesType.map(res => 
                <ListGroupItem key={res.id} onClick={props.getSubcategories}>
                    <Link 
                          to={"/" + res.name} id={res.id}>{res.name}
                    </Link>
                </ListGroupItem>)
            } else {
                categories =  <SearchForm getProducts={test} options={props.categories} productsId={props.productsId}/>
            }
        
    return (
      <ListGroup flush>
        {categories}
      </ListGroup>
    );
  
}

export default Categories_nav;




