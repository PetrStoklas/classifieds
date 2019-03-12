import React, {Component} from 'react'
import classes from './Home.module.css';
import categories from '../../../axios_routes/categories_axios';

class Home extends Component {

    state = {
        categories: null
    }

    componentDidMount() {
        categories.get()
            .then(categories => {
                this.setState()
                console.log(categories)
            })
            .catch(err => console.log(err));
    }

    render() {

        return (
            <h3 className={classes.Red}>home component</h3>
        );
    }
}

export default Home;


