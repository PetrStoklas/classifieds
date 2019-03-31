import React from 'react';
import {Nav, NavItem, 
  // NavLink
} from 'reactstrap';
import {Link} from 'react-router-dom';
const AdminNavigatoion = props => {

  return (
    <div>
      <p>List Based</p>
      <Nav vertical>
        <NavItem className='mt-3'>
          <Link to="/admin/add_product">Add New Product</Link>
        </NavItem>
        <NavItem className='mt-3'>
          <Link to="/admin/allProductsList">Selling List</Link>
        </NavItem>
      </Nav>
      <hr/>
    </div>
  );
};

export default AdminNavigatoion