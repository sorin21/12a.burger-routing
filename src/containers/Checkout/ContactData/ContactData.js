import React, { Component } from 'react';

import Button from 'components/UI/Button/Button';
import Spinner from 'components/UI/Spinner/Spinner';
import Input from 'components/UI/Input/Input'
import axios from 'axios-order.js';

import classes from './ContactData.css'

class ContactData extends Component {
  state = {
    mane: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false
  };

  orderHandler = (event) => {
    console.log(this.props)
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Sorin',
        address: {
          street: 'Test street 1',
          zipCode: '43523',
          country: 'Romania'
        },
        email: 'test@test.com'
      },
      deliveryMethod: 'fastest'
    }
    axios.post('/orders.json', order)
      .then(response => {
        this.setState({ loading: false });
        // redirect to Home page
        this.props.history.push('/');
      })
      .catch(error => {
        this.setState({ loading: false });
      })
  }

  render() {
    let form = (
      <form>
        <Input inputtype="input" type="text" name="street" placeholder="Your street" />
        <Input inputtype="input" type="text" name="name" placeholder="Your name" />
        <Input inputtype="input" type="email" name="email" placeholder="Your email" />
        <Input inputtype="input" type="text" name="postalCode" placeholder="Your postal code " />
        <Button btnType="Success" clicked={this.orderHandler}>Order </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your contact data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;