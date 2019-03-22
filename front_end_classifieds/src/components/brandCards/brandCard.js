import React from 'react';
import {Container, Row, Col, Card, CardBody, Button} from 'reactstrap';
import Volvo from '../../img/brands/volvoLogo.png';
import classes from './brandCard.module.css';

const brandCard = () => { 
    return (
        <div className={classes.RoundCorners}>
        <Card className="w-100 p-0 my-3 border-0">
            <Row>
                <Col className="p-0 border-1"><img src={Volvo} className={classes.ImgSize} alt="volvo logo" resizeMode={'contain'} /></Col>                              
                <Col className="p-0 border-1"><img src={Volvo} className={classes.ImgSize} alt="volvo logo" resizeMode={'contain'} /></Col>                              
                <Col className="p-0 border-1"><img src={Volvo} className={classes.ImgSize} alt="volvo logo" resizeMode={'contain'} /></Col>                              
                <Col className="p-0 border-1"><img src={Volvo} className={classes.ImgSize} alt="volvo logo" resizeMode={'contain'} /></Col>                              
            </Row>
            <Row>
                <Col className="p-0 border-1"><img src={Volvo} className={classes.ImgSize} alt="volvo logo" resizeMode={'contain'} /></Col>                              
                <Col className="p-0 border-1"><img src={Volvo} className={classes.ImgSize} alt="volvo logo" resizeMode={'contain'} /></Col>                              
                <Col className="p-0 border-1"><img src={Volvo} className={classes.ImgSize} alt="volvo logo" resizeMode={'contain'} /></Col>                              
                <Col className="p-0 border-1"><img src={Volvo} className={classes.ImgSize} alt="volvo logo" resizeMode={'contain'} /></Col>                              
            </Row>
        
        
        </Card>
        </div>
    )
}

export default brandCard