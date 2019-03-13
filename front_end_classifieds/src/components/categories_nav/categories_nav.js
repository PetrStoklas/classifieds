import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Row, Col } from 'reactstrap';
// import { Spinner } from 'reactstrap';


const Categories_nav = props => {
    // console.log(props);
    let categories = '';

        let categoriesType = '';

        let subs = '';
        
        if(props.categories) {
            categoriesType = props.categories;
            console.log(props);
        } else if(props.subCats) {
            // categoriesType = props.subCats
            subs = props.subCats;
            console.log(subs);
            
        }

        let options = '';
        options = categoriesType.map(res => (
            <option key={res.id} value={res.id}>{res.name}</option>
        ))
        let subSubcategories = ''
        if(subs){

            subSubcategories = subs.map(res => (
                <option key={res.id} value={res.id}>{res.name}</option>
                ))
            }
        
        if(window.innerWidth < 390){
            categories = categoriesType.map(res => 
                <ListGroupItem key={res.id} onClick={props.getSubcategories}>
                    <Link 
                          to={"/" + res.name} id={res.id}>{res.name}
                    </Link>
                </ListGroupItem>)
            } else {
                categories = 
                        <Form>
                            <Row>
                                <Col md="6">
                                <FormGroup>
                                    <Label for="exampleSelect">Select</Label>
                                        <Input type="select" name="select" id="exampleSelect" onChange={props.getSubcategories}>
                                            {options}
                                        </Input>
                                </FormGroup>
                                </Col>
                                <Col md="6">
                                <FormGroup>
                                    <Label for="exampleSelect">Select</Label>
                                        <Input type="select" name="select" id="exampleSelect">
                                            {subSubcategories}
                                        </Input>
                                </FormGroup>
                                </Col>
                            </Row>
                        </Form>
            }
        
    return (
      <ListGroup flush>
        {categories}
      </ListGroup>
    );
  
}

export default Categories_nav;




