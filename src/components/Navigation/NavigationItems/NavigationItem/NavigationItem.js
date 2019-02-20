import React from 'react';
import { NavLink } from 'react-router-dom'
import classes from './NavigationItem.css'

const NavigationItem = (props) => {
  return (
    <ul>
      <li className={classes.NavigationItem}>
        <NavLink
          to={props.link} 
          exact={props.exact}
          activeClassName={classes.active}>
          {props.children}
        </NavLink >
      </li>
    </ul>
  );
};

export default NavigationItem;