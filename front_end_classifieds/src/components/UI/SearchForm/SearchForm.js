
import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Row, Col } from 'reactstrap';


class SearchForm extends Component {


        
        state = {
          optionsList: [],
          changed: false
        }
      

      componentDidMount() {
        this.setState({optionsList: this.props.options});
      }

      getSubCategoriesHandler (e) {
        console.log(e.target.value)
      }

  
      render() {
    
      console.log(this.state.optionsList);
    
    let categories = <option>1</option>;
    // console.log(optionsList);
    categories  = this.state.optionsList.map(res => 
                            <option key={res.id} value={res.id}>{res.name}</option>)
    

    return (
        <>
          <Form>
            <Row>
                <Col md="6">
                <FormGroup>
                    <Label for="exampleSelect">Select</Label>
                        <Input onChange={this.getSubCategoriesHandler} type="select" name="select" id="exampleSelect">
                        
                        {categories}
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


