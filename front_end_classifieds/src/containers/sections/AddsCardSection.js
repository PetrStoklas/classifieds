import React, {Component} from 'react'
import Card from '../../components/productCardTypes/verticalCard/verticalCard';

class CardsContainer extends Component {

  seeProduct = props => {
    console.log('see product details')    
  }

  render() {
    let cards = '';
    cards = this
      .props
      .cardsData
      .map(res => 
      <Card
        key={res.id}
        name={res.title}
        price={res.price}
        created={res.created_at}
        description={res.description}
        productView={() => {
          this.props.getClickedId(res.id)
          }}
        />);


    return (
      <div>
        <div className="d-flex flex-wrap">
          {cards}
        </div>
      </div>
    );
  }
}

export default CardsContainer;