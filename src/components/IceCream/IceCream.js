import React from 'react';
import classes from './IceCream.module.css';

const IceCream = () => {
  return (
    <div>
            <div className={classes.icecream} >
             
            <p className={classes.cone}></p>  
               {/*<p>Please start adding scoops</p>*/} 
                 {/* scope comment  */}
            
             
              <  div className={classes.cherry} />
            </div>
          </div>
  )
}

export default IceCream