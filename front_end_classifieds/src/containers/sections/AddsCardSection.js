import React, {Component} from 'react'
import Card from '../../components/productCardTypes/verticalCard/verticalCard';
import {type} from 'os';

class CardsContainer extends Component {

  seeProduct = props => {
    console.log('see product details')
  }

  render() {
    let cards = '';
    let all = ''
    if (this.props.cardsData) {
      all = this
        .props
        .cardsData
        .map(res => {
          // console.log(res);
          let foo = '';
          let arr = Object.keys(res.product);
          cards = arr.map(fres => {
            // console.log(res.product['title'])
            foo = <Card
              category_id={res.product[fres]}
              created={res.product[fres]}
              name={res.product['title']}
              description={res.product[fres]}
              key={res.product['id']}
              price={res.product['price']}
              seller_id={res.product[fres]}
              updated_at={res.product[fres]}
              productView={() => {
              this
                .props
                .getClickedId(res.id)
            }}/>
          })
          return foo;
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