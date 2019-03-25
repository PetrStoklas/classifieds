import React from 'react';
import ProductCarousel from '../../UI/ProductCarousel/ProductCarousel';
import {
  Container, Row, Col, Card,
  // CardBody, 
  Button
} from 'reactstrap';
import classes from './verticalCard.module.css';
import {ReactComponent as ShareIcon} from '../../../img/share-icon.svg'
import {Link} from 'react-router-dom'

const VerticalCard = props => {

  let card = ''

  
  if (props) {
    card = (
      <Card className="w-100 mx-1 my-3 border-0">
        <div className={classes.RoundCorners}>
          <ProductCarousel/>
        </div>
        <Container className={classes.CardInfoSection}>
          <hr className={classes.Hr}/>

          <Row className="pb-4 d-flex flex-row justify-content-between">
            <Col className="col d-flex flex-column justify-content-between mx-1 my-0">
              <Row className="mx-1 mb-2 d-flex flex-row justify-content-center">
                <span className={classes.Title}>{props.name}</span>
              </Row>
              <Row className="mx-1 d-flex flex-row justify-content-between">
                <span className={classes.Text}>120000km</span>
                <span className={classes.Text}>gasoline</span>
              </Row>
              <Row className="mx-1 d-flex flex-row justify-content-between">
                <span className={classes.Text}>2.8L Injektion</span>
                <span className={classes.Text}>manual</span>
              </Row>
            </Col>

            <hr className={classes.Vr}/>

            <Col className="col-4 d-flex flex-column justify-content-between mx-1">
              <Row className="mr-2 mb-2 d-flex flex-row justify-content-end">
                <ShareIcon/>
                <Link to="/products"><Button onClick={props.productView}>See Details</Button></Link>
              </Row>
              <Row className="empty mx-1 d-flex flex-row justify-content-between">
                <span className={classes.Blue}>-</span>
              </Row>
              <Row className="mx-2 d-flex flex-row justify-content-between">
                <span className={classes.Text}>Prague, cz</span>
                <div>
                  <span className={classes.Price}>300000</span>
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