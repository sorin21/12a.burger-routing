import React, { Component } from 'react'
import Aux from 'hoc/_Aux';

import Toolbar from 'components/Navigation/Toolbar/Toolbar';
import SideDrawer from 'components/Navigation/SideDrawer/SideDrawer';

import css from './Layout.css';

class Layout extends Component {
  state = {
    showSideDrawer: false
  }

  sideDrawerCloseHandle = () => {
    this.setState({ showSideDrawer: false })
  }

  drawerToggleClicked = () => {
    this.setState((prevState) => ({ showSideDrawer: !prevState.showSideDrawer }))
  }

  render() {
    return (
      <Aux>
        <Toolbar clicked={this.drawerToggleClicked} />
        <SideDrawer closed={this.sideDrawerCloseHandle} open={this.state.showSideDrawer} />
        toolbar, siderdrawer, backdrop
        <main className={css.Content}>
          {this.props.children}
        </main>
      </Aux>
    );
  }
}

export default Layout;