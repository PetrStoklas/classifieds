import React, {Component} from 'react'
import Card from '../../components/productCardTypes/verticalCard/verticalCard';
// import {type} from 'os';

class CardsContainer extends Component {

  render() {

    let allCards = ''
    if (this.props.cardsData) {
      allCards = this
        .props
        .cardsData
        .map(res => {
          let singleCard = '';
          let allProducts = Object.keys(res.product);
          allProducts.map(() => {
            singleCard = <Card
              key={res.product.id}
              productData = {res.product}
              images={res.images}
              productView={() => {
              this
                .props
                .getClickedId(res.id)
            }}/>
          })
          return singleCard;
        });
    }

    return (
      <div>
        <div className="d-flex flex-wrap  justify-content-around">
          {allCards}
        </div>
      </div>
    );
  }
}

export default CardsContainer;