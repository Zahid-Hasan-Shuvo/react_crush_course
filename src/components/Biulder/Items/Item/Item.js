import React from 'react';
import classes from './Item.module.css';

const Item = () => {
  return (
    <li className={classes.item} >
    <span>Vanilla</span>
    <span className={classes.quantity}>2</span>
    <div className="right">
      <button type="button" className={[classes.plus,'rounden'].join(' ')}>+</button>
      <button type="button" className={[classes.minus,'rounden'].join(' ')}>-</button>
    </div>
  </li>
  )
}

export default Item