import React, {Component} from 'react'
import Navigation from '../../../components/UI/Navigation/Navigation';
import FullCardView from '../../../components/productCardTypes/verticalCard/verticalCard';
import {Container} from 'reactstrap';

class SingleProductView extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <Navigation/>
        <Container>

          <p>All Products Will Come Here</p>
          <FullCardView/>
        </Container>
      </div>
    );
  }
}

export default SingleProductView;
