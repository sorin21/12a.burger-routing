import React, { Component } from 'react'
import CheckoutSummary from 'components/Order/CheckoutSummary/CheckoutSummary'

export default class Checkout extends Component {
  state = {
    ingredients: {
      salad: 1,
      meat: 1,
      cheese: 1,
      bacon: 1
    }
  }

  componentDidMount() {
    // extract the query params sent from purchaseContinueHandler, from BurgerBuilder
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    for (let params of query.entries()) {
      // ['salad', 1]
      ingredients[params[0]] = +params[1];
    }
    this.setState({ ingredients })
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
      </div>
    )
  }
}
