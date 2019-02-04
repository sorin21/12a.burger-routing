import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
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
          {/* // for test the remove interceptors in withErrorHandler */}
          {/* {this.state.show ? <BurgerBuilder /> : null} */}
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
