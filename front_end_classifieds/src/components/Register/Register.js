import React from 'react';
import loginForm from '../../config_files/login_form_config'
import {Form, Button, Spinner} from 'reactstrap';
import FormComponent from '../../components/form/form';

const RegisterFrom = props => {
  console.log(props)

  const createRegisterForm = () => {
    let registrationForm = <Spinner/>
    registrationForm = loginForm.map(formElements => <FormComponent
      key={formElements.label_for}
      generalType={formElements.generalType}
      input_name={formElements.input_name}
      type={formElements.type}
      label_for={formElements.label_for}
      title={formElements.label_for}
      formdata={props.getinputvalues}/>);
    return registrationForm;
  }

  return (
    <div>
      <Form onSubmit={props.submitform}>
        {createRegisterForm(props.getinputvalues, props.submitform)}
        <Button id="register">
          Submit
        </Button>
      </Form >
    </div>
  );
};

export default RegisterFrom