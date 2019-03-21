import React from 'react';
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  // CardDeck,
  CardSubtitle,
  CardBody
} from 'reactstrap';
import './Card.css';

const Example = (props) => {

  return (
      <Card className="red" >
        <CardImg
          top
          width="25%"
          src="https://images.pexels.com/photos/305223/pexels-photo-305223.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt={props.name}/>
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
          <CardSubtitle> $ {props.price}</CardSubtitle>
          <CardText>{props.description}</CardText>
          <CardSubtitle>{props.created}</CardSubtitle>
          <Button>Button</Button>
        </CardBody>
      </Card>
  );
};

export default Example;