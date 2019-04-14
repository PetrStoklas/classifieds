import React from 'react';
import {Table} from 'reactstrap';

export default class SellerProductTable extends React.Component {
  render() {
    // console.log(this.props);

    let tr = null;
    if (this.props.data) {
      tr = this
        .props
        .data
        .map(res => 
        <tr key={res.id}>
          <th scope="row">1</th>
          <td>{res.title}</td>
          <td>{res.price}</td>
          <td>{res.updated_at}</td>
        </tr>)
    }
    return (
      <Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Price</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>
          {tr}
        </tbody>
      </Table>
    );
  }
}