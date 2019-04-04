import React from 'react';
import { Jumbotron, 
    // Button 
} from 'reactstrap';
import classes from './header.module.css';
import BrandCard from '../brandCard/brandCard';

const header = props => {

  return (
    <div>
    <Jumbotron className={classes.Wrapper}>
        <h1 className={classes.Header +" display-3"}>......</h1>
        <p className="lead">Best Automotive Trading Platform in Ukraine</p>
        <hr className="my-2" />
        <BrandCard 
          categories={props}
          getChildrenId={(id) => { props.getCategoryId(id)}}
        />
        <p className="lead">
        </p>
      </Jumbotron>
    </div>
  );
};

export default header