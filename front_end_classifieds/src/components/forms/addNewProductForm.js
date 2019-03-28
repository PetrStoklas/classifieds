import React, { Component } from 'react';
// import axios from 'axios';
import  { Button, Form } from 'reactstrap';
import Input from '../form/input';
import addNewProductConfig from '../../config_files/addNewProductConfig';
import CategoriesNav from '../categoriesNav/categoriesNav';
import fetchCategories from '../../axios_routes/categories_axios';
import {
    // BrowserRouter as Router,
    // Route
  } from "react-router-dom";


class AddNewProductForm extends Component {

    state = {
        categories: [],
        subCategories: [],
    }

    getChildren = e => {
        this.setState({active_category: e.target.textContent, subCategories: []})
        let id = e.target.id
        fetchCategories
          .get('/' + id)
          .then(subCategories => {
            subCategories
              .data
              .map(res => {
                return (this.setState({
                  subCategories: [
                    ...this.state.subCategories,
                    res
                  ]
                }))
              })
          })
          .catch(err => console.log(err));
    }

    render() {
        // console.log(addNewProductConfig);
        // console.log('Add new product form ------');
        // console.log('addNewProd props------',this.props);
        
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
                multiple = {config.multiple}
                placeholder = {config.input_placeholder}
            />
        )
        
        return (
            
            <div>
                <h3>addNewProductForm</h3>
                <Form onChange={this.props.getinputvalues} onSubmit={this.props.submitform}>
                    {formContent}
                    
                    <CategoriesNav 
                      categories={this.props.categories}
                      getSubcategories={this.getChildren}
                      subCats={this.props.subCats}
                      context={this.props.context}
                      catId={this.props.catId}
                      // category_id={this.props.category_id}
                      // getAllProducts={this.getProductsWithCategory}
                    />

                    <Button type="submit" id="submitUpload">Upload new product</Button>
                </Form>
            </div>
        )
    }
}

export default AddNewProductForm;
