import React from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Container
} from 'reactstrap';

const loginForm = props => {

  let form = null;

  
  console.log(props);
  return (
    <Container>
      <Form onSubmit={props.sumbitForm}>
        <FormGroup>
          <Label for="loginName">Your Name</Label>
          <Input
            onChange={props.getInputFormValue}
            type="text"
            name="name"
            id="loginName"
            placeholder="Please input your Name"/>
        </FormGroup>
        <FormGroup>
          <Label for="loginEmail">Email</Label>
          <Input
            onChange={props.getInputFormValue}
            type="email"
            name="email"
            id="loginEmail"
            placeholder="Please input your Email"/>
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            onChange={props.getInputFormValue}
            type="password"
            name="password"
            id="password"
            placeholder="Please input your password"/>
        </FormGroup>
        <FormGroup>
          <Label for="password_confirmation">Password</Label>
          <Input
            onChange={props.getInputFormValue}
            type="password"
            name="password_confirmation"
            id="password_confirmation"
            placeholder="Please confirm your password"/>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </Container>
  );
};

export default loginForm