import React, {Component} from 'react'
import Card from '../../components/UI/card/card';

class CardsContainer extends Component {

    

  render() {
    console.log(this.props.cardsData)

    let cards = '';
    cards = this.props.cardsData.map(res => <Card key={res.id} name={res.title} />);


    return (
      <div>
        {cards}
      </div>
    );
  }
}

export default CardsContainer;
