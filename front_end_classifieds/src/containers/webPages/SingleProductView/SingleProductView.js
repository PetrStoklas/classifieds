import React, {Component} from 'react'
import Navigation from '../../../components/UI/Navigation/Navigation';
import ProductCardDetail from '../../../components/productCardTypes/productCardDetail/productCardDetail';
import {Container} from 'reactstrap';

class SingleProductView extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <Navigation/>
        <Container>
          <p>All Products Will Come Here</p>
          <ProductCardDetail name={this.props.name}/>
        </Container>
      </div>
    );
  }
}



export default SingleProductView;
