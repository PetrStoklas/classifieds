import React from 'react';
// import ProductCarousel from '../../UI/ProductCarousel/ProductCarousel';
import {
  Container, Row, Col, Card,
  // CardBody, Button
} from 'reactstrap';
import classes from './verticalCard.module.css';
import {ReactComponent as ShareIcon} from '../../../img/share-icon.svg'
import {
  Link,
  // Route
} from 'react-router-dom'

const VerticalCard = props => {

  const getClickedProductId = e => {
    console.log('clicked');
  }

  let card = ''
  let shareIcon = <ShareIcon className={classes.Icon}/>


  // console.log('propsss',props);
  if (props) {
    card = (
      <Card className="w-100 mx-1 my-3 border-0">
        <div className={classes.RoundCorners}>

          {/* <img
            className="w-100"
            src={props['images']
            ? "http://127.0.0.1:8000/uploads/products/" + props['images'][0]['filename']
            : ''}
            alt={props['images']
            ? props['images'][0]['original_filename']
            : 'empty'}
          /> */}

        </div>
        <Container className={classes.CardInfoSection}>
          <hr className={classes.Hr}/>

          <Row className="pb-4 d-flex flex-row justify-content-between">
            <Col className="col d-flex flex-column justify-content-between mx-1 my-0">
              <Row className="mx-1 mb-2 d-flex flex-row justify-content-center">
                <span className={classes.Title}>{props.productData.title}</span>
              </Row>
              <Row className="mx-1 d-flex flex-row justify-content-between">
                <span className={classes.Text}>{props.productData.mileage}km</span>
                <span className={classes.Text}>{props.productData.fuel}</span>
              </Row>
              <Row className="mx-1 d-flex flex-row justify-content-between">
                <span className={classes.Text}>{props.productData.cubic_capacity}</span>
                <span className={classes.Text}>{props.productData.gearbox}l</span>
              </Row>
            </Col>

            <hr className={classes.Vr}/>

            <Col className="col-4 d-flex flex-column justify-content-between mx-1">
              <Row className="mr-2 mb-2 d-flex flex-row justify-content-end">
                <div className={props.productData.id} >

                <Link
                  id={props.productData.id}
                  to={{  
                  pathname: `/product/${props.productData.id}`,
                }}>
                  {shareIcon}
                </Link>
                </div>
              </Row>
              <Row className="empty mx-1 d-flex flex-row justify-content-between">
                <span className={classes.Blue}>-</span>
              </Row>
              <Row className="mx-2 d-flex flex-row justify-content-between">
                <span className={classes.Text}>Prague, cz</span>
                <div>
                  <span className={classes.Price}>{props.productData.price}</span>
                  <span className={classes.Text}>czk</span>
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </Card>
    );
  }

  return (
    <div>
      {card}
    </div>
  );
};

export default VerticalCard