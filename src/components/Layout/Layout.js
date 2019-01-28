import React from 'react';
import Aux from '../../Aux/_Aux';
import css from './Layout.css';

const Layout = props => {
  return (
    <Aux>
      toolbar, siderdrawer, backdrop
      <main className={css.Content}>
        {props.children}
      </main>
    </Aux>
  );
};

export default Layout;