import React from 'react';
import classes from './IceCreamBuilder.module.css';
import IceCream from '../../components/IceCream/IceCream';
import Builder from '../../components/Biulder/Builder';




const IceCreamBuilder = () => {
  
 const state= {
  items:{
    vanilla:45,
    chocolet:50,
    lemon:55,
    orange:40,
    strawbary:60
  },
  scoops:[],
  totalPrice:0,

 };
 
  const {items} =state;
 return (
    <div className={['container', classes.container].join(' ')}>

<IceCream items={items}/>
<Builder />;

    </div>
  );
}


export default IceCreamBuilder