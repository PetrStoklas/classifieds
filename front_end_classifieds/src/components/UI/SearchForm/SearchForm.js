
import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Row, Col } from 'reactstrap';
import categories from '../../../axios_routes/categories_axios'


class SearchForm extends Component {


        
        state = {
          optionsList: [],
          subSubcategories: []
        }
      

      componentDidMount() {
        this.setState({optionsList: this.props.options});
      }

      getSubCategoriesHandler = (e) => {
        // console.log(e.target.value)
        categories.get('/' + e.target.value)
          .then(res => this.setState({subSubcategories: res.data}))
          .catch(err => console.log(err));
        }

        getProducts = e => {
          e.preventDefault();
          console.log('click');
        }
        
        render() {
         
    
    
    let categories = '';
    let subCategories = ''
    if(this.state.subSubcategories) {
      subCategories = this.categories;
    }
    categories  = this.state.optionsList.map(res => 
                            <option key={res.id} value={res.id}>{res.name}</option>)
    subCategories = this.state.subSubcategories.map(res => 
        <option key={res.id} value={res.id}>{res.name}</option>)
    

    return (
          // <Form onSubmit={this.getProducts}>
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
                            {subCategories}
                        </Input>
                </FormGroup>
                </Col>
                <Button onClick={this.getProducts}>Get Cars</Button>
            </Row>
        // </Form>
    );
  }
}

export default SearchForm;


