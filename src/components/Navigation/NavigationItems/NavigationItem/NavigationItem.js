import React from 'react';
import classes from './NavigationItem.css'

const NavigationItem = (props) => {
  return (
    <ul>
      <li className={classes.NavigationItem}>
        <a 
          href="{props.link}" 
          className={props.active ? classes.active : null}>
          {props.children}
        </a>
      </li>
    </ul>
  );
};

export default NavigationItem;