import React from 'react';
import {
  FormGroup,
  Label,
  Input,
  FormText
  // Container
} from 'reactstrap';

const temp_form = props => {


  let form = null;

  const generateForm = (type, label_for, input_name, input_id, input_placeholder, formdata, submitform) => {
    switch (props.generalType) {
      case 'text_email_passw':
        form = (
          <FormGroup onSubmit={props.submitform}>
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

        case 'file_upload': 
        form = (
          <FormGroup>
            <Label for={label_for}>{label_for}</Label>
            <Input 
              type={type}
              name={input_name}  
              id={input_id}
              />
            <FormText color="muted">
              {input_placeholder}
            </FormText>
          </FormGroup>
        )
        return form;

        case 'text_area':
        form = (
          <FormGroup>
            <Label for={label_for}>{label_for}</Label>
            <Input 
              type={type} 
              name={input_name} 
              id={input_id}
              placeholder={input_placeholder}
              onChange={props.formdata} />
          </FormGroup>
        )
        return form;

      default:
        break;
    }

  }

  return (
    <div>
        {generateForm(props.type, props.label_for, props.input_name, props.input_id, props.input_placeholder, props.formdata, props.submitform)}
    </div>
    
  );
};

export default temp_form