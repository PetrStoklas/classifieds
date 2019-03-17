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

  console.log(props);
  return (
    <Container>
      <Form onSubmit={props.sumbitForm}>
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
          <Label for="examplePassword">Password</Label>
          <Input
            onChange={props.getInputFormValue}
            type="password"
            name="password"
            id="examplePassword"
            placeholder="Please input your password"/>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </Container>
  );
};

export default loginForm