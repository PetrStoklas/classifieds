import React from 'react';
// eslint-disable-next-line
import styles from './brandCard.module.css';
import images from '../../config_files/brandCards';

const BrandCard = props => {


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
          src={'http://www.api.testweb.life/uploads/brand_icons/' + images[res.name]} alt='test'/>
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