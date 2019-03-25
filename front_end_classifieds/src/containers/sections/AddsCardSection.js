import React, {Component} from 'react'
// import {Row, Col, Container} from 'reactstrap';
import VerticalCard from '../../components/productCardTypes/verticalCard/verticalCard';

class CardsContainer extends Component {

  
  render() {
    let cards = '';
    cards = this
      .props
      .cardsData
      .map(res => <VerticalCard
        key={res.id}
        name={res.title}
        price={res.price}
        created={res.created_at}
        description={res.description}/>);
    console.log('cards data',this.props.cardsData);

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