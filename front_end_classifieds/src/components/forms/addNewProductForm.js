import React, { Component } from 'react';
// import axios from 'axios';
import  { Button, Form } from 'reactstrap';
import Input from '../form/input';
import addNewProductConfig from '../../config_files/addNewProductConfig';
import CategoriesNav from '../categoriesNav/categoriesNav';
import fetchCategories from '../../axios_routes/categories_axios';
import fetchProduct from '../../axios_routes/products_axios';
import {
    // BrowserRouter as Router,
    // Route
  } from "react-router-dom";


class AddNewProductForm extends Component {

    state = {
        categories: [],
        subCategories: [],
        newProduct: {
          title: null,
          description: null,
          price: null,
          category_id: null,
          uploadedFiles: null, //image file
          mileage: null,
          cubic_capacity: null,
          door_count: null,
          year: null,
          cylinder: null,
          registered: null,
          power: null,
          emission_class: null,
          color: null,
          interior: null,
          gearbox: null,
          fuel: null
        },
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

    getInputFormValue = e => {
      e.preventDefault();

      if (e.target.id === 'original_filename') { // if image -> using e.target.files insead of e.target.value
        this.setState({
          newProduct: {
            ...this.state.newProduct,
            uploadedFiles: e.target.files
          }
        });

      } else {
        this.setState({
          newProduct: {
            ...this.state.newProduct,
            [e.target.id]: e.target.value
          }
        })
        console.log(e.target.id, '=', e.target.value);
      }
    }

    submitProductForm = e => { // NEW PRODUCT FORM SUBMIT
      e.preventDefault();
  
      let fd = new FormData();
      fd.append('image', this.state.newProduct.uploadedFiles[0]);
      fd.append('title', this.state.newProduct.title);
      fd.append('price', this.state.newProduct.price);
      fd.append('description', this.state.newProduct.description);
      fd.append('category_id', this.state.newProduct.category_id);
      fd.append('mileage', this.state.newProduct.mileage);
      fd.append('cubic_capacity', this.state.newProduct.cubic_capacity);
      fd.append('door_count', this.state.newProduct.door_count);
      fd.append('year', this.state.newProduct.year);
      fd.append('cylinder', this.state.newProduct.cylinder);
      fd.append('registered', this.state.newProduct.registered);
      fd.append('power', this.state.newProduct.power);
      fd.append('emission_class', this.state.newProduct.emission_class);
      fd.append('color', this.state.newProduct.color);
      fd.append('interior', this.state.newProduct.interior);
      fd.append('gearbox', this.state.newProduct.gearbox);
      fd.append('fuel', this.state.newProduct.fuel);
  
      // fd.append('category_id', 1); // needs to be dynamic
  
      fetchProduct
        .post('/', fd, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err)
          alert('failed to upload your product')
        });
    }

    sayHi() {
      console.log('HI');
    }

    render() {
        // console.log(addNewProductConfig);
        // console.log('Add new product form ------');
        // console.log('addNewProd props------',this.props);
        console.log('form renders');
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
                <Form onChange={this.getInputFormValue} onSubmit={this.submitProductForm}>
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
