import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import Layout from 'components/Layout/Layout';
import BurgerBuilder from 'containers/BurgerBuilder/BurgerBuilder';
import Checkout from 'containers/Checkout/Checkout'
import Orders from 'containers/Orders/Orders'
class App extends Component {
  // for test the remove interceptors in withErrorHandler
  // state = {
  //   show: true
  // }

  // for test the remove interceptors in withErrorHandler
  // componentDidMount = () => {
  //   setTimeout(() => {
  //     this.setState({ show: false });
  //   }, 2000)
  // }

  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders} />
            <Route path="/" exact component={BurgerBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
