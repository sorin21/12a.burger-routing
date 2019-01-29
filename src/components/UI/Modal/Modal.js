import React, { Component } from 'react';

import Backdrop from 'components/UI/Backdrop/Backdrop';
import Aux from 'hoc/_Aux';
import classes from './Modal.css';

class Modal extends Component {
  render() {
    return (
      <Aux>
        <Backdrop show={this.props.show} />
        <div 
          className={classes.Modal}
          style={{
            // vh = view port high
            // translateY(-100vh) = slide it outside of screen
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0'
          }}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Modal;