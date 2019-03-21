import React from 'react';
import {Container, Row, Col, Card, Button} from 'reactstrap';
import ProductCarousel from '../UI/ProductCarousel/ProductCarousel';
import './product_card_detail.css';

const card_detail = props => {
  return (
    <Col md="6" lg="4">
      <Card body className="w-100">
        <Row class="product-image">
          <div class="product-image">
            <ProductCarousel/>
          </div>
        </Row>

        <Row className="card_info_section">
          <Container className="car_info rounded mt-2 mx-2 px-1">
            <hr/>
            <div className="title">
              <h3>{props.name}</h3>
            </div>

            <div className="info_wrap">
              <Row className="row_info mx-auto mt-0">
                <Col className="car_info_col first" xs="4">
                  <h5 className="car_info_headline">mileage</h5>
                  <h4 className="car_info_value">120000km</h4>
                </Col>
                <Col className="car_info_col middle first" xs="4">
                  <h5 className="car_info_headline">mileage</h5>
                  <h4 className="car_info_value">120000km</h4>
                </Col>
                <Col className="car_info_col first" xs="4">
                  <h5 className="car_info_headline">mileage</h5>
                  <h4 className="car_info_value">120000</h4>
                </Col>
              </Row>

              <Row className="row_info mx-auto">
                <Col className="car_info_col" xs="4">
                  <h5 className="car_info_headline">mileage</h5>
                  <h4 className="car_info_value">120000km</h4>
                </Col>
                <Col className="car_info_col middle" xs="4">
                  <h5 className="car_info_headline">mileage</h5>
                  <h4 className="car_info_value">120000km</h4>
                </Col>
                <Col className="car_info_col" xs="4">
                  <h5 className="car_info_headline">mileage</h5>
                  <h4 className="car_info_value">120000km</h4>
                </Col>
              </Row>

              <Row className="row_info mx-auto">
                <Col className="car_info_col" xs="4">
                  <h5 className="car_info_headline">mileage</h5>
                  <h4 className="car_info_value">120000km</h4>
                </Col>
                <Col className="car_info_col middle" xs="4">
                  <h5 className="car_info_headline">mileage</h5>
                  <h4 className="car_info_value">120000km</h4>
                </Col>
                <Col className="car_info_col" xs="4">
                  <h5 className="car_info_headline">mileage</h5>
                  <h4 className="car_info_value">120000km</h4>
                </Col>
              </Row>

              <Row className="row_info mx-auto">
                <Col className="car_info_col" xs="4">
                  <h5 className="car_info_headline">mileage</h5>
                  <h4 className="car_info_value">120000km</h4>
                </Col>
                <Col className="car_info_col middle" xs="4">
                  <h5 className="car_info_headline">mileage</h5>
                  <h4 className="car_info_value">120000km</h4>
                </Col>
                <Col className="car_info_col" xs="4">
                  <h5 className="car_info_headline">mileage</h5>
                  <h4 className="car_info_value">120000km</h4>
                </Col>
              </Row>
            </div>

            <div className="custom_desc">
              <p>Custom added AC, sport brakes Brembo, Recaro seats. The car was never
                crashed. I am the third owner. Can provide you with all documentation and
                paperworks of this car.
              </p>
            </div>
          </Container>
        </Row>
      </Card>
      <Button className="buy-btn">Button</Button>
    </Col>
  )
}

export default card_detail