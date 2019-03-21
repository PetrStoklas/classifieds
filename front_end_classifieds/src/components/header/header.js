import React from 'react';
import { Jumbotron, 
    // Button 
} from 'reactstrap';
import classes from './header.module.css';

const header = props => {
  
  return (
    <div>
    <Jumbotron className={classes.Wrapper}>
        <h1 className="display-3">KP-Trade</h1>
        <p className="lead">Best Automotive Trading Platform in Ukraine</p>
        <hr className="my-2" />
        <p>We believe in something other's don't</p>
        <p className="lead">
          {/* <Button color="primary">Learn More</Button> */}
        </p>
      </Jumbotron>
    </div>
  );
};

export default header