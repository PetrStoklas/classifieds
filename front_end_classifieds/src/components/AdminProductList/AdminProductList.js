import React, {Component} from 'react'
import AdminProductsTable from '../UI/AdminProductsTable/AdminProductsTable';
import fetchSellerProducts from '../../axios_routes/seller_products';

class AdminProductList extends Component {

  state = {
    sellerProducts: null
  }


  componentDidMount() {
    fetchSellerProducts('/1').then(res => {
      console.log(res)
      this.setState({sellerProducts: res.data});
    }).catch(err => console.log(err));
  }

  render() {

    return (<AdminProductsTable/>);

  }
}

export default AdminProductList;
