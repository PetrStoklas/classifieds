import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from "react-router-dom";
// import { Spinner } from 'reactstrap';

const Categories_nav = props => {
    // console.log(props);
    let categories = '';


        let categoriesType = '';

        if(props.categories) {
            categoriesType = props.categories;
        } else if(props.subCats) {
            categoriesType = props.subCats
        }
        
            categories = categoriesType.map(res => 
                <ListGroupItem key={res.id} onClick={props.getSubcategories}>
                    <Link 
                          to={"/" + res.name} id={res.id}>{res.name}
                    </Link>
                </ListGroupItem>)
        
    return (
      <ListGroup flush>
        {categories}
      </ListGroup>
    );
  
}

export default Categories_nav;




