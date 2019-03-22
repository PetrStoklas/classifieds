import React from 'react';
import styles from './brandCard.module.css';

const BrandCard = props => {

  const returnIdToParent = e => {
      console.log(e.target.id);
  }


  let brandCard = '';
  brandCard = props
    .categories
    .categories
    .map(res => (
      <div className={styles.Card}
      key={res.id}
      id={res.id}
      onClick={returnIdToParent}
      >{res.name}</div>
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