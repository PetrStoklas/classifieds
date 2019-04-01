import React, {Component} from 'react'
import fetchSellerProducts from '../../axios_routes/seller_products';
import AdminProductsTable from '../UI/AdminProductsTable/AdminProductsTable';

class AdminProductList extends Component {

  state = {
    sellerProducts: ''
  }

  
  componentDidMount() {
    fetchSellerProducts('/1').then(res => {
      console.log(res)
      this.setState({sellerProducts: res.data});
    }).catch(err => console.log(err));
  }

  render() {
    
    
          

    return (
      // 
      <div>
        <AdminProductsTable data={this.state.sellerProducts}/>
      </div>
      );

  }
}

export default AdminProductList;
