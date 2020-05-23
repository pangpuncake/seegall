import React, { Component, Fragment } from 'react';
import classes from './Layout.module.css';
import Toolbar from '../Layout/Toolbar/Toolbar';
import SideDrawer from '../Layout/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        sideDrawerOpen: false
    }

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
          return {sideDrawerOpen: !prevState.sideDrawerOpen};
        });
    
      };
    
      backdropClickHandler = () => {
        this.setState({sideDrawerOpen: false});
      };


    render() {
        return (
        <Fragment>
            <div>
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
                <SideDrawer show={this.state.sideDrawerOpen} backdropClickHandler={this.backdropClickHandler} />
            </div>
            <main className={classes.Content}>
                {this.props.children}
            </main>
        </Fragment>
        )
    }
}

export default Layout;