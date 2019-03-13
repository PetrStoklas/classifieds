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

        const test = e => {
            e.preventDefault();
            console.log('hello');
        }

        
        if(window.innerWidth < 390){
            categories = categoriesType.map(res => 
                <ListGroupItem key={res.id} onClick={props.getSubcategories}>
                    <Link 
                          to={"/" + res.name} id={res.id}>{res.name}
                    </Link>
                </ListGroupItem>)
            } else {
                categories = <Form> <SearchForm onSubmit={test} options={props.categories}/></Form>
            }
        
    return (
      <ListGroup flush>
        {categories}
      </ListGroup>
    );
  
}

export default Categories_nav;




