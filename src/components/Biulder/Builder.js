import React from 'react';
import classes from './Builder.module.css';

const Builder = () => {
  return (
   
    <div className={classes.builder}>
      <h3>Build your own Ice Cream Sundae</h3>
     
{/* items */}
{/* totalprice */}

      <button type="button" onclick="next()" className={[classes.order, 'rounded'].join()}>
        Add to Cart
      </button>
    </div>
  );
};

export default Builder