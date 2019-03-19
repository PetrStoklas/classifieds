import React from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from 'reactstrap';

const temp_form = props => {


  console.log(props);
  let form = null;

  const generateForm = (type, label_for, input_name, input_id, input_placeholder) => {

    switch (type) {
      case 'email':
        form = <FormGroup>
          <Label for={label_for}>{label_for}</Label>
          <Input
            type={type}
            name={input_name}
            id={input_id}
            placeholder={input_placeholder}/>
        </FormGroup>
        return form;
      case 'password':
        form = <FormGroup>
          <Label for={label_for}>{label_for}</Label>
          <Input
            type={type}
            name={input_name}
            id={input_id}
            placeholder={input_placeholder}/>
        </FormGroup>
        return form;

      default:
        break;
    }

  }

  return (
    <div>
      <Form>
        {generateForm(props.type, props.label_for, props.title)}
      </Form>
    </div>
  );
};

export default temp_form