import React from 'react';
// eslint-disable-next-line
import styles from './brandCard.module.css';

const BrandCard = props => {

  // const returnIdToParent = e => {
  //     console.log(e.target.id);
  //     props.getChildrenId(e.target.id);
  // }


  let brandCard = '';
  brandCard = props
    .categories
    .categories
    .map(res => (
      <div className={styles.Card}
      key={res.id}
      id={res.id}
      
      onClick={() => { 
        props.getChildrenId(res.id)
      }}
      
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