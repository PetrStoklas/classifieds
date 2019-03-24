import React, { Component } from 'react';
import axios from 'axios';
import  { Button, Form } from 'reactstrap';
import Input from '../form/input';
import addNewProductConfig from '../../config_files/addNewProductConfig';

class AddNewProductForm extends Component {
    render() {
        // console.log(addNewProductConfig);
        let formContent = null;
        formContent = addNewProductConfig.map(config =>
            
            <Input 
                key = {config.label_for}
                generalType = {config.generalType}
                type = {config.type}
                inputName = {config.input_name}
                input_id = {config.input_id}
                label_for = {config.label_for}
                title = {config.title}
            />
        )
        
        return (
            
            <div>
                <h3>addNewProductForm</h3>
                <Form>
                    {formContent}
                </Form>
            </div>
        )
    }
}

export default AddNewProductForm;
