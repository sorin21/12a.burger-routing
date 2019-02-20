import React from 'react';

import classes from './Order.css'

const Order = (props) => {
  // display Ingredients and Price
  // transform ingredients from object to array
  // 1st option to do this is let transformedIngredients from Burger.js
  // or this alternative
  const ingredients = []
  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName]
    })
  }
  const ingredientOutput = ingredients.map(ingredient => {
    return <span
      style={{
        textTransform: 'capitalize',
        display: 'inlineBlock',
        margin: '0 8px',
        border: '1px solid #ccc',
        padding: '5px'
      }}
      key={ingredient.name}
    >{ingredient.name} ({ingredient.amount})</span>
  })
  return (
    <div className={classes.Order}>
      <p>{ingredientOutput}</p>
      <p>Price <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong></p>
    </div>
  );
};

export default Order;