import React from 'react';
import classes from './IceCreamBuilder.module.css';
import IceCream from '../../components/IceCream/IceCream';
import Builder from '../../components/Biulder/Builder';



const IceCreamBuilder = () => {
  return (
    <div className={['container', classes.container].join(' ')}>
<IceCream />
<Builder />

    </div>
  )
}

export default IceCreamBuilder