import React, {Component} from 'react'
import classes from './Home.module.css';
import categories from '../../../axios_routes/categories_axios';
import { Container, Row, Col, Button } from 'reactstrap';
import CategoriesNav from '../../../components/categories_nav/categories_nav';
import { BrowserRouter as Router, Route } from "react-router-dom";

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
        this.setState({active_category: e.target.id, subCategories: []})
        console.log(this.state);
        categories.get('/' + e.target.id)
            .then(subCategories => {
                subCategories.data.map(res => {

                    this.setState({subCategories: [...this.state.subCategories, res]})
                    // console.log(res)
                })
            })
            .catch(err => console.log(err));
        // console.log(this.state);
    }

    render() {

        
        return (
            <Container>
                <Router>
                    <Row>
                        <Col md="6">
                            <Route 
                                path="/" exact 
                                component={ () => <CategoriesNav 
                                                    categories={this.state.categories}
                                                    getSubcategories={this.getChildren} /> }/>
                            <Route path={'/'+this.state.active_category} component= {() => <CategoriesNav subCats={this.state.subCategories} /> }/>
                        </Col>
                        <Col md="6">
                        <p className={ this.state.color ? classes.Red : ''}>hello</p>
                            <Button className={classes.Red}>Click Me</Button>
                        </Col>
                    </Row>
                </Router>
            </Container>
        );
    }
}

export default Home;


