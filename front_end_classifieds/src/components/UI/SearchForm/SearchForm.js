import React, {Component} from 'react';
import {
  // Button,
  // Form,
  FormGroup,
  Label,
  Input,
  // FormText,
  // ButtonGroup,
  // ButtonToolbar
} from 'reactstrap';
import {Row, Col} from 'reactstrap';
import categories from '../../../axios_routes/categories_axios'

class SearchForm extends Component {

  state = {
    optionsList: [],
    subSubcategories: [],
    productId: null // ??
  }

  componentDidMount() {
    this.setState({optionsList: this.props.options});
    // console.log(this.props.context);
  }

  getSubCategoriesHandler = (e) => {
    categories
      .get('/' + e.target.value)
      .then(res => this.setState({
        ...this.state,
        subSubcategories: res.data}))
      .catch(err => console.log(err));

    this.setState({productId: e.target.value});
    
  }

  // passing the selected category to home view via categories_nav component
  getProducts = e => {
    e.preventDefault();
    const id = this.state.productId;
    this
      .props
      .getProducts(id)
  }

  render() {
    if (this.state.productId) {
      // console.log(this.state.productId);
    }

    let categories = '';
    let subCategories = ''
    if (this.state.subSubcategories) {
      subCategories = this.categories;
    }
    categories = this.props.categories.map(res => <option key={res.id} value={res.id}>{res.name}</option>)


    subCategories = this
      .state
      .subSubcategories
      .map(res => <option key={res.id} value={res.id}>{res.name}</option>)

    return (
      <div>
        <Row>
          <Col md="6">
            <FormGroup>
              <Label for="select_brand">Select Brand</Label>
              <Input
                onChange={this.getSubCategoriesHandler}
                type="select"
                name="select"
                id="select_brand">
                <option>choose</option>
                {categories}
              </Input>
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label for="model_select">Select Model</Label>
              <Input 
                type="select" 
                name="select" 
                id="category_id"
                onChange={this.props.categoryId}
              >
                <option>choose</option>
                {subCategories}
              </Input>
            </FormGroup>
          </Col>
        </Row>
      </div>
    );
  }
}

export default SearchForm;
