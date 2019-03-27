import React, {Component} from 'react'
import Card from '../../components/productCardTypes/verticalCard/verticalCard';
import {type} from 'os';

class CardsContainer extends Component {

  render() {
    let cards = '';
    let all = ''
    if (this.props.cardsData) {
      all = this
        .props
        .cardsData
        .map(res => {
          console.log(res);
          let singleCard = '';
          let allProducts = Object.keys(res.product);
          cards = allProducts.map(fres => {
            // console.log(res.product['title'])
            singleCard = <Card
              category_id={res.product['category_id']}
              created={res.product['created_at']}
              name={res.product['title']}
              description={res.product['description']}
              key={res.product['id']}
              price={res.product['price']}
              seller_id={res.product['seller_id']}
              updated_at={res.product['updated_at']}
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
        <div className="d-flex flex-wrap  justify-content-between">
          {all}
        </div>
      </div>
    );
  }
}

export default CardsContainer;