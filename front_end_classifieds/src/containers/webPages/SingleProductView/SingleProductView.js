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
      // console.log(res.data[0].product);
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
    console.log(this.state);

    let product = <Spinner/>

    if(this.state.productData){
      product = <ProductCardDetail 
        category_id={this.state.productData.id}
        created_at={this.state.productData.created_at}
        description={this.state.productData.description}
        id={this.state.productData.id}
        price={this.state.productData.price}
        seller_id={this.state.productData.seller_id}
        title={this.state.productData.title}
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
