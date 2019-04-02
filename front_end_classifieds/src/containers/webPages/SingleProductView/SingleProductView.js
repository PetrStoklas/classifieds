import React, {Component} from 'react'
import Navigation from '../../../components/UI/Navigation/Navigation';
import ProductCardDetail from '../../../components/productCardTypes/productCardDetail/productCardDetail';
import {Container, Spinner} from 'reactstrap';
import fetchSingleProduct from '../../../axios_routes/fetchSingleProduct';

class SingleProductView extends Component {


  state = {
    productData: null,
    productImages: null,
  }

  componentDidMount() {
    fetchSingleProduct.get('/' + this.props.match.params.product_id)
    .then(res => {
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
    let images = []
    if(this.state.productImages){
      this.state.productImages.map(res => {
        let items = new Object();
        items.src = 'http://www.api.testweb.life/uploads/products/' + res.filename;
        items.altTest = res.filename;
        // items.caption = 'caption one';
        images.push(items);
        return items;
      })
    }
    console.log(images);
    let product = <Spinner/>

    if(this.state.productData){
      product = <ProductCardDetail 
        productData={this.state.productData}
        images={images}
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
