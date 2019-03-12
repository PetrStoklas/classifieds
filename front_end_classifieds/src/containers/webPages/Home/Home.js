import React, {Component} from 'react'
import classes from './Home.module.css';
import categories from '../../../axios_routes/categories_axios';
import { Container, Row, Col, Button } from 'reactstrap';
import CategoriesNav from '../../../components/categories_nav/categories_nav';
import { Spinner } from 'reactstrap';

class Home extends Component {

    state = {
        categories: [],
        color: true
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
                // categories.data.map(res => console.log(res.parent_id));
                console.log(this.state);
            })
            .catch(err => console.log(err));
    }

    render() {

        let categories = '';
        if(this.state.categories) {
            categories = this.state.categories.map(res => categories = <CategoriesNav key={res.id} name={res.name}/>)
        } else {
            categories = <Spinner />
        }
        return (
            <Container>
                <Row>
                <Col md="6">
                    {categories}
                </Col>
                <Col md="6">
                <p className={ this.state.color ? classes.Red : ''}>hello</p>
                    <Button className={classes.Red}>Click Me</Button>
                </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;


