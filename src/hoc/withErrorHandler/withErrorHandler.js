import React, { Component } from 'react';
import Modal from 'components/UI/Modal/Modal';
import Aux from '../_Aux';

const withErrorHandler = (WrapperdComponent, axios) => {
  return class extends Component {
    state = {
      error: null
    }
    componentDidMount() {
      axios.interceptors.request.use(request => {
        // then clear any error before sending any other request
        this.setState({ error: null });
        // return the request so the request can continue
        return request;
      })
      axios.interceptors.response.use(response => response, error => {
        // 1st get the error
        this.setState({ error });
      })
    }

    // when you click on backdrop you want to clear erros too
    errorConfirmedhandler = () => {
      this.setState({ error: null });
    }

    render() {
      return (
        <Aux>
          {/* show the modal if the error is not null */}
          <Modal
            show={this.state.error}
            modalClosed={this.errorConfirmedhandler}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrapperdComponent {...this.props} />
        </Aux>
      );
    }
  }
}

export default withErrorHandler;