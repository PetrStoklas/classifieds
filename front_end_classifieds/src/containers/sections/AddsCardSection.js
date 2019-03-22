import React, {Component} from 'react'
// import {Row, Col, Container} from 'reactstrap';
import Card from '../../components/productCardTypes/verticalCard/verticalCard';

class CardsContainer extends Component {

  
  render() {

    console.log(this.props.cardsData)
    let cards = '';
    cards = this
      .props
      .cardsData
      .map(res => <Card
        key={res.id}
        name={res.title}
        price={res.price}
        created={res.created_at}
        description={res.description}/>);

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