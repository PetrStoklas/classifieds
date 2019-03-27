import React, {Component} from 'react'
import Navigation from '../../../components/UI/Navigation/Navigation';
import VerticalCard from '../../../components/productCardTypes/verticalCard/verticalCard';
import {Container} from 'reactstrap';

class SingleProductView extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <Navigation/>
        <Container>
          <p>All Products Will Come Here</p>
          <VerticalCard name={this.props.name}/>
        </Container>
      </div>
    );
  }
}



export default SingleProductView;
