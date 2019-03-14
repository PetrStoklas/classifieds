
import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, ButtonGroup, ButtonToolbar } from 'reactstrap';
import { Row, Col } from 'reactstrap';
import categories from '../../../axios_routes/categories_axios'


class SearchForm extends Component {


        
        state = {
          optionsList: [],
          subSubcategories: [],
          productId: null
        }
      

      componentDidMount() {
        this.setState({optionsList: this.props.options});
      }

      getSubCategoriesHandler = (e) => {
        // console.log(e.target.value)
        categories.get('/' + e.target.value)
          .then(res => this.setState({subSubcategories: res.data}))
          .catch(err => console.log(err));

          this.setState({productId: e.target.value});
        }

        getProducts = e => {
          e.preventDefault();
          const id = this.state.productId;
          this.props.getProducts(id)
        }
        
        render() {
          if(this.state.productId) {
            console.log(this.state.productId);
          }
    
    
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
            <Form onSubmit={this.getProducts}>
              <ButtonGroup size="lg">
              <Button>Left</Button>
              <Button>Middle</Button>
              <Button>Right</Button>
            </ButtonGroup>
              <Row>
                  <Col md="6">
                  <FormGroup>
                      <Label for="exampleSelect">Select Brand</Label>
                          <Input onChange={this.getSubCategoriesHandler} type="select" name="select" id="exampleSelect">
                          {categories}
                          </Input>
                  </FormGroup>
                  </Col>
                  <Col md="6">
                  <FormGroup>
                      <Label for="exampleSelect">Select Model</Label>
                          <Input type="select" name="select" id="exampleSelect">
                              {subCategories}
                          </Input>
                  </FormGroup>
                  </Col>
                  <Button>Get Cars</Button>
              </Row>
          </Form>
      );
    }
}

export default SearchForm;


