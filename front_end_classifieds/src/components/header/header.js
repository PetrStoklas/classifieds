import React from 'react';
import { Jumbotron, 
    // Button 
} from 'reactstrap';
import classes from './header.module.css';
import BrandCard from '../brandCard/brandCard';

const header = props => {

  // console.log(props)

  const getChildrenId = (id) => {
      console.log(id);
      console.log('clicked')
  }

  return (
    <div>
    <Jumbotron className={classes.Wrapper}>
        <h1 className="display-3">KP-Trade</h1>
        <p className="lead">Best Automotive Trading Platform in Ukraine</p>
        <hr className="my-2" />
        <BrandCard 
          categories={props}
          getChildrenId={(id) => { props.getCategoryId(id)}}
          />
        <p>We believe in something other's don't</p>
        <p className="lead">
        </p>
      </Jumbotron>
    </div>
  );
};

export default header