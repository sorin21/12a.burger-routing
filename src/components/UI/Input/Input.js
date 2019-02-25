import React from 'react';

import classes from './Input.css'

const Input = (props) => {
  // console.log('props', props.elementConfig.options.map(opt => {
  //   console.log('opt', opt);
  // }));
  let inputElement = null;
  switch (props.elementType) {
    case 'input':
      inputElement = <input
        {...props.elementConfig}
        value={props.value}
        className={classes.InputElement}
        onChange={props.changed} />
      break;
    case 'textarea':
      inputElement = <textarea
        {...props.elementConfig}
        value={props.value}
        className={classes.InputElement}
        onChange={props.changed} />
      break;
    case 'select':
      inputElement = <select 
        className={classes.InputElement} 
        value={props.value}
        onChange={props.changed}>
        {props.elementConfig ? props.elementConfig.options.map(opt => {
          return (
            <option
              key={opt.value}
              value={opt.value}>
              {opt.displayValue}
            </option>
          )}) : null}
        </select>;
      break;

    default:
      inputElement = <input
        {...props.elementConfig}
        value={props.value}
        className={classes.InputElement}
        onChange={props.changed} />;
      break;
  }
  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default Input;