import React, { Component } from 'react'
import { Route } from 'react-router-dom';

import CheckoutSummary from 'components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

export default class Checkout extends Component {
  state = {
    ingredients: null,
    totalPrice: 0 
  }

  componentWillMount() {
    // extract the query params sent from purchaseContinueHandler, from BurgerBuilder
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    let price = 0;

    for (let params of query.entries()) {
      if(params[0] === 'price') {
         price = params[1]; 
      } else {
        // ['salad', 1]
         ingredients[params[0]] = +params[1];
      }
      
    }
    this.setState({ ingredients, totalPrice: price })
  }


  checkoutContinued = () => {
    this.props.history.replace('/checkout/contact-data');
  }

  checkoutCanceled = () => {
    this.props.history.goBack();
  }

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          checkoutCanceled={this.checkoutCanceled}
          checkoutContinued={this.checkoutContinued} />
          {/* pass this.props here to have history in ContactData.js */}
        <Route path={this.props.match.path + '/contact-data'} render={() => (
          <ContactData 
            {...this.props} 
            ingredients={this.state.ingredients} 
            price={this.state.totalPrice} /> 
        )} />
      </div>
    )
  }
}
