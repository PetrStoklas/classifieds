import React from 'react';
import {Nav, NavItem, NavLink} from 'reactstrap';
import {Link} from 'react-router-dom';
const AdminNavigatoion = props => {

  return (
    <div>
      <p>List Based</p>
      <Nav vertical>
        <NavItem>
          <Link to="/admin/add_product">Add New Product</Link>
        </NavItem>
        <NavItem>
          <NavLink href="#">All Items</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Another Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#">Disabled Link</NavLink>
        </NavItem>
      </Nav>
      <hr/>
    </div>
  );
};

export default AdminNavigatoion