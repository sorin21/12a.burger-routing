import React, { Component } from 'react';
import Modal from 'components/UI/Modal/Modal';
import Aux from '../_Aux';

const withErrorHandler = (WrapperdComponent, axios) => {
  return class extends Component {
    constructor(props) {
      super(props);

      this.state = {
        error: null
      };

      // create properties in the fly, this.reqInterceptor for ex,
      // to be able to remove interceptors, 
      // to prevent memory leacks
      this.reqInterceptor = axios.interceptors.request.use(request => {
        // then clear any error before sending any other request
        this.setState({ error: null });
        // return the request so the request can continue
        return request;
      })
      this.resInterceptor = axios.interceptors.response.use(response => response, error => {
        // 1st get the error
        this.setState({ error });
      })
    }

    componentWillUnmount = () => {
      // console.log('Will unmount!', this.reqInterceptor, this.resInterceptor);
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
    }


    // componentDidMount() {
    //   axios.interceptors.request.use(request => {
    //     // then clear any error before sending any other request
    //     this.setState({ error: null });
    //     // return the request so the request can continue
    //     return request;
    //   })
    //   axios.interceptors.response.use(response => response, error => {
    //     // 1st get the error
    //     this.setState({ error });
    //   })
    // }

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