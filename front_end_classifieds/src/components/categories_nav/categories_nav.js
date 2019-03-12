import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';


const Categories_nav = props => {

    return (
      <ListGroup>
        <ListGroupItem>{props.name}</ListGroupItem>
      </ListGroup>
    );
  
}

export default Categories_nav;




