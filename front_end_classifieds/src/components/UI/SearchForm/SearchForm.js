
import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Row, Col } from 'reactstrap';


class SearchForm extends Component {

  
      state = {
    
      }

  render() {
    if(this.props.options){

    }    
            let optionsList = '';
            optionsList = this.props.options.map(res => (
                <option key={res.id} value={res.id}>{res.name}</option>
            ))

        // let subSubcategories = ''
        // if(subs){

        //     subSubcategories = subs.map(res => (
        //         <option key={res.id} value={res.id}>{res.name}</option>
        //         ))
        //     }




    return (
        <>
          <Form>
            <Row>
                <Col md="6">
                <FormGroup>
                    <Label for="exampleSelect">Select</Label>
                        <Input type="select" name="select" id="exampleSelect">
                            {optionsList}
                        </Input>
                </FormGroup>
                </Col>
                <Col md="6">
                <FormGroup>
                    <Label for="exampleSelect">Select</Label>
                        <Input type="select" name="select" id="exampleSelect">
                            {/* {subSubcategories} */}
                        </Input>
                </FormGroup>
                </Col>
            </Row>
        </Form>
        </>
    );
  }
}

export default SearchForm;


