import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from "react-router-dom";
import { Spinner } from 'reactstrap';

const Categories_nav = props => {
    console.log(props);
    let categories = '';
        if(props.categories) {
            categories = props.categories.map(res => 
                categories = 
                <ListGroupItem>
                    <Link to={"/" + res.name} >{res.name}
                    </Link>
                </ListGroupItem>)
        } else {
            categories = <Spinner />
        }
    return (
      <ListGroup>
        {categories}
        {/* <ListGroupItem><Link to="/else" >Else</Link></ListGroupItem> */}
      </ListGroup>
    );
  
}

export default Categories_nav;




