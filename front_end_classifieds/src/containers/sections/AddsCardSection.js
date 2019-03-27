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
          console.log('res',res);
          let singleCard = '';
          let allProducts = Object.keys(res.product);
          allProducts.map(() => {
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
              images={res.images}
              productView={() => {
              this
                .props
                .getClickedId(res.id)
            }}/>
          })
          return singleCard;
        });
        console.log('addCard  end ---------')
    }

    return (
      <div>
        <div className="d-flex flex-wrap  justify-content-between">
          {allCards}
        </div>
      </div>
    );
  }
}

export default CardsContainer;