import React, {Component} from 'react'
import Card from '../../components/UI/card/card';
import {CardDeck} from 'reactstrap';

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
        <CardDeck>
          {cards}
        </CardDeck>
      </div>
    );
  }
}

export default CardsContainer;