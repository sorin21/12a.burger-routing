import React from 'react';

import classes from './Order.css'

const Order = () => {
  // display Ingredients and Price
  return (
    <div className={classes.Order}>
      <p>Ingredients</p>
      <p>Price <strong>USD 5.50</strong></p>
    </div>
  );
};

export default Order;