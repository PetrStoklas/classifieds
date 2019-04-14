import React from 'react';
import {Container, Row, Col, Card } from 'reactstrap';
// import ProductCarousel from '../../UI/ProductCarousel/ProductCarousel';
import './productCardDetail.css';
import {UncontrolledCarousel} from 'reactstrap';

const card_detail = props => {
    console.log('singelview', props.images);
    console.log('singelview', props);
return (
    <Col md="11" className="mx-auto" lg="7">
      <Card body className="w-100 border-0">
        <Row className="product-image">
        <div className="product-image">
                {/* Image Carousel */}
            <UncontrolledCarousel items={props.images} />
        </div>
        </Row>
        <Row className="card_info_section">
          <Container className="car_info rounded mt-2 mx-2 px-1">
            <hr/>
            <div className="title">
              <h3>{props.productData.title}</h3>
            </div>

            <div className="info_wrap ">
              <Row className="row_info mx-auto mt-0">
                <Col className="car_info_col first" xs="4">
                  <h5 className="car_info_headline">mileage</h5>
                  <h4 className="car_info_value">{props.productData.mileage}km</h4>
                </Col>
                <Col className="car_info_col middle first" xs="4">
                  <h5 className="car_info_headline">cubic capacity</h5>
                  <h4 className="car_info_value">{props.productData.cubic_capacity}ccm</h4>
                </Col>
                <Col className="car_info_col first" xs="4">
                  <h5 className="car_info_headline">door count</h5>
                  <h4 className="car_info_value">{props.productData.door_count}</h4>
                </Col>
              </Row>

              <Row className="row_info mx-auto">
                <Col className="car_info_col" xs="4">
                  <h5 className="car_info_headline">year</h5>
                  <h4 className="car_info_value">{props.productData.year}</h4>
                </Col>
                <Col className="car_info_col middle" xs="4">
                  <h5 className="car_info_headline">cylinders</h5>
                  <h4 className="car_info_value">{props.productData.cylinder}</h4>
                </Col>
                <Col className="car_info_col" xs="4">
                  <h5 className="car_info_headline">emission class</h5>
                  <h4 className="car_info_value">{props.productData.emission_class}</h4>
                </Col>
              </Row>

              <Row className="row_info mx-auto">
                <Col className="car_info_col" xs="4">
                  <h5 className="car_info_headline">registered at</h5>
                  <h4 className="car_info_value">{props.productData.registered}</h4>
                </Col>
                <Col className="car_info_col middle" xs="4">
                  <h5 className="car_info_headline">power</h5>
                  <h4 className="car_info_value">{props.productData.power}hp</h4>
                </Col>
                <Col className="car_info_col" xs="4">
                  <h5 className="car_info_headline">color</h5>
                  <h4 className="car_info_value">{props.productData.color}</h4>
                </Col>
              </Row>

              <Row className="row_info mx-auto">
                <Col className="car_info_col" xs="4">
                  <h5 className="car_info_headline">fuel</h5>
                  <h4 className="car_info_value">{props.productData.fuel}</h4>
                </Col>
                <Col className="car_info_col middle" xs="4">
                  <h5 className="car_info_headline">gearbox</h5>
                  <h4 className="car_info_value">{props.productData.gearbox}</h4>
                </Col>
                <Col className="car_info_col" xs="4">
                  <h5 className="car_info_headline">interior</h5>
                  <h4 className="car_info_value">{props.productData.interior}</h4>
                </Col>
              </Row>
            </div>

            <div className="custom_desc">
              <p>{props.productData.description}
              </p>
            </div>
          </Container>
        </Row>
      </Card>
      {/* <Button className="buy-btn">Button</Button> */}
    </Col>
  )
}

export default card_detail