import React from 'react';
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody,
  Container,
  Row,
  Col,
} from 'reactstrap';
import ProductCarousel from '../ProductCarousel/ProductCarousel';
import './Card.css';
import ShareSvg from '../../../img/share-icon.svg';

// const ShareSvg = require('../../../img/share-icon.svg')

const Example = (props) => {

  // console.log(props);


  return (
      
      <Col lg="4">

        <Card body className="w-100">
          <Row className="product-image">
          <div class="product-image">
            <ProductCarousel />
          </div>
          </Row>


          
          <Row className="card_info">
            <Col xs="6 left">
              <Row className="card_title"><span>Dodge Challenger</span></Row>
              <Row className="values_row">
                <Col class="values_col "><h4>120000km</h4></Col>
                <Col class="values_col right"><h4>gasoline</h4></Col>
              </Row>
              <Row className="values_row">
                <Col class="values_col"><h4>2.8L Injection</h4></Col>
                <Col class="values_col right"><h4>manual</h4></Col>     
              </Row>
            </Col>
            
            <Col xs="6 right">

             <Row className="icons">
              
             </Row>

             <Row className="location_price_row">

             <Col class="values_col location"><h4 className="location">Prague, CZ</h4></Col>

             <Col class="values_col price"><h4 className="price">1500000<span className="currency">czk</span></h4></Col>

             </Row>
            </Col>
            
          </Row>

          
      
        </Card>
        
      </Col>
  );
};

export default Example;