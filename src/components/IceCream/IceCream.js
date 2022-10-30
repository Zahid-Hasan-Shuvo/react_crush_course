import React from 'react';
import classes from './IceCream.module.css';
import Scoop from './Scoop/Scoop';

const IceCream = ({items}) => {
  const flavers= Object.keys(items);
  return (
    <div>
            <div className={classes.icecream} >
             
            <p className={classes.cone}></p>  
               {/*<p>Please start adding scoops</p>*/} 
                 {flavers.map((flaver)=>(
                  <Scoop key={flaver} scoop={flaver}/>
                 )
                 )}
            
             
              <  div className={classes.cherry} />
            </div>
          </div>
  )
}

export default IceCream