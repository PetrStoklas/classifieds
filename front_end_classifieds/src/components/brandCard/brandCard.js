import React from 'react';
// eslint-disable-next-line
import styles from './brandCard.module.css';

const BrandCard = props => {

  const images = {
    HONDA: 'honda-logo.png',
    BMW: 'bmw_new.png',
    MERCEDES: 'Mercedes-Benz.png',
    VOLVO: 'volvo-logo.png',
    AUDI: 'audi-logo.png',
    FORD: 'ford-logo.png',
    HUNDAI: 'hundai-logo.png',
    KIA: 'kia-logo.png',
    CITROEN: 'citroen-logo.png',
    VOLVKSWAGEN: 'vw-logo.png',
    SKODA: 'skoda-logo.png',
    DAEWOO: 'daewoo-logo.png',
    SUBARU: 'subaru-logo.png',
    TOYOTA: 'toyota-logo.png',
    CHERRY: 'cherry-logo.png'
  }

  let brandCard = '';
  brandCard = props
    .categories
    .categories
    .map(res => (
      <div
        className={styles.Card}
        key={res.id}
        id={res.id}
        onClick={() => {
        props.getChildrenId(res.id)
      }}>
        <img
          className={styles.BrandLogo}
          src={'http://127.0.0.1:8000/uploads/brand_icons/' + images[res.name]}/>
      </div>
    ))

  return (
    <div>
      <div className="d-flex flex-wrap">
        {brandCard}
      </div>
    </div>
  );
};

export default BrandCard