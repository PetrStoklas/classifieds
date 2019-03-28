import React, {Component} from 'react'
import Navigation from '../../../components/UI/Navigation/Navigation';
import ProductCardDetail from '../../../components/productCardTypes/productCardDetail/productCardDetail';
import {Container, Spinner} from 'reactstrap';
import fetchSingleProduct from '../../../axios_routes/singleProduct_axios';

class SingleProductView extends Component {

  state = {
    productData: null,
    productImages: null,
  }
  componentDidMount() {
    fetchSingleProduct('/' + this.props.match.params.product_id).then(res => {
      // console.log(res);
      console.log(res);
      let productData = res.data[0].product;
      let productImages = res.data[0].images;
      this.setState({
        productData: productData, 
        productImages: productImages});
    }).catch(err => {
      console.log(err);
    })
  }

  render() {
    console.log('product data',this.state.productData);

    let product = <Spinner/>

    if(this.state.productData){
      product = <ProductCardDetail 
        productData={this.state.productData}
        images={this.state.productImages}
      />
    }
    return (
      <div>
        <Navigation/>
        <Container>
          {product}
        </Container>
      </div>
    );
  }
}

export default SingleProductView;
