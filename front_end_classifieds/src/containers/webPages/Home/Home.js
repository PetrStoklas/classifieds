import React, {Component} from 'react'
import classes from './Home.module.css';
import categories from '../../../axios_routes/categories_axios';
import { Container, Row, Col, Button } from 'reactstrap';
import CategoriesNav from '../../../components/categories_nav/categories_nav';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Jumbotron from '../../../components/header/header';
import CardsContainer from '../../sections/AddsCardSection';

class Home extends Component {

    state = {
        categories: [],
        subCategories: [],
        color: true,
        active_category: null,
    }

    componentDidMount() {
        categories.get()
            .then(categories => {
                categories.data.map(res => {
                    if(!res.parent_id){
                        this.setState({categories: [...this.state.categories, res]}
                            )
                    }
                });
            })
            .catch(err => console.log(err));
    }

    getChildren = e => {
        this.setState({active_category: e.target.textContent, subCategories: []})
        // console.log(this.state);
        categories.get('/' + e.target.id)
            .then(subCategories => {
                subCategories.data.map(res => {

                    this.setState({subCategories: [...this.state.subCategories, res]})
                })
            })
            .catch(err => console.log(err));
    }

    render() {

        
        return (
                <Router>
                <>
                <Jumbotron/>
                    <Container>
                        <Row>
                            <Col md="1">
                            <p className={ this.state.color ? classes.Red : ''}>hello</p>
                                
                            </Col>
                            <Col md="">
                            <Route 
                                path="/" exact 
                                component={ () => <CategoriesNav 
                                                    categories={this.state.categories}
                                                    getSubcategories={this.getChildren} /> }/>
                            <Route path={'/'+this.state.active_category} component= {() => <CategoriesNav subCats={this.state.subCategories} /> }/>
                        </Col>

                        <Col md="9">
                        <p className={ this.state.color ? classes.Red : ''}>hello</p>
                            
                        </Col>
                    </Row>
                    <Row>
                        <CardsContainer/>
                    </Row>
            </Container>
            </>
                </Router>
        );
    }
}

export default Home;


