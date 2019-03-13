import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from "react-router-dom";
// import { Spinner } from 'reactstrap';

const Categories_nav = props => {
    let categories = '';


        if(props.categories) {
            categories = props.categories.map(res => 
                <ListGroupItem key={res.id} onClick={props.getSubcategories}>
                    <Link 
                          to={"/" + res.name} id={res.id}>{res.name}
                    </Link>
                </ListGroupItem>)
        }  
        if(props.subCats) {
            categories = props.subCats.map(res => 
                <ListGroupItem key={res.id}>
                    <Link 
                          to={"/" + res.id} id={res.id}>{res.name}
                    </Link>
                </ListGroupItem>)
        }
    return (
      <ListGroup flush>
        {categories}
      </ListGroup>
    );
  
}

export default Categories_nav;




