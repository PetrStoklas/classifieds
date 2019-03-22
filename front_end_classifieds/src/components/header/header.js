import React from 'react';
import { Jumbotron, 
    // Button 
} from 'reactstrap';
import classes from './header.module.css';
import BrandCard from '../brandCard/brandCard';

const header = props => {

  // console.log(props)

  return (
    <div>
    <Jumbotron className={classes.Wrapper}>
        <h1 className="display-3">KP-Trade</h1>
        <p className="lead">Best Automotive Trading Platform in Ukraine</p>
        <hr className="my-2" />
        <BrandCard categories={props}/>
        <p>We believe in something other's don't</p>
        <p className="lead">
        </p>
      </Jumbotron>
    </div>
  );
};

export default header