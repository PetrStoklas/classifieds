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


  let form = null;

  const generateForm = (type, label_for, input_name, input_id, input_placeholder, formdata, submitform) => {

    switch (props.generalType) {
      case 'text_email_passw':
        form = 
        (<FormGroup onSubmit={props.submitform}>
          <Label for={label_for}>{label_for}</Label>
          <Input
            type={type}
            name={input_name}
            id={input_id}
            placeholder={input_placeholder}
            onChange={props.formdata}
            />
        </FormGroup>
        )
        return form;

      default:
        break;
    }

  }

  return (
    <div>
      <Form> 
        {generateForm(props.type, props.label_for, props.title)}
        <Button>Submit</Button>
      </Form>
    </div>
  );
};

export default temp_form