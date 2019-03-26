import React, {Component} from 'react'
// import {Row, Col, Container} from 'reactstrap';
import VerticalCard from '../../components/productCardTypes/verticalCard/verticalCard';

class CardsContainer extends Component {

  
  render() {
    let cards = '';
    cards = this
      .props
      .cardsData
      .map(res => 

        <VerticalCard
        images={res['images']}
        key={res['product'].id}
        name={res['product'].title}
        price={res['product'].price}
        // created={res['product'].created_at}
        // description={res['product'].description}
        
        />
        
        // console.log('ress ----- ', res['product'].title),
    // console.log('cards data',this.props.cardsData
    );

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