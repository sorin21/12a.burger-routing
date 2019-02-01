import React from 'react';
import Aux from 'hoc/_Aux';
import Toolbar from 'components/Navigation/Toolbar/Toolbar';

import css from './Layout.css';

const Layout = props => {
  return (
    <Aux>
      <Toolbar />

      toolbar, siderdrawer, backdrop
      <main className={css.Content}>
        {props.children}
      </main>
    </Aux>
  );
};

export default Layout;