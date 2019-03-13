import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from "react-router-dom";
import SearchForm from '../UI/SearchForm/SearchForm';
// import { Spinner } from 'reactstrap';


const Categories_nav = props => {
    // console.log(props);
    let categories = '';

        let categoriesType = '';

        let subs = '';
        
        if(props.categories) {
            categoriesType = props.categories;
            // console.log(props);
        } else if(props.subCats) {
            // categoriesType = props.subCats
            subs = props.subCats;
            // console.log(subs);
            
        }

        
        if(window.innerWidth < 390){
            categories = categoriesType.map(res => 
                <ListGroupItem key={res.id} onClick={props.getSubcategories}>
                    <Link 
                          to={"/" + res.name} id={res.id}>{res.name}
                    </Link>
                </ListGroupItem>)
            } 
        
    return (
      <ListGroup flush>
        {categories}
        <SearchForm options={props.categories}/>
      </ListGroup>
    );
  
}

export default Categories_nav;




