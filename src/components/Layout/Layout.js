import React, { Component, Fragment } from 'react';
import classes from './Layout.module.css';
import Toolbar from '../Layout/Toolbar/Toolbar';
import SideDrawer from '../Layout/SideDrawer/SideDrawer';
import AuthContext from '../context/AuthContext/AuthContext';
import Auth from '../Auth/Auth';
import { connect } from 'react-redux';

class Layout extends Component {

    state = {
        sideDrawerOpen: false,
        showLogin: false
    }

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
          return {sideDrawerOpen: !prevState.sideDrawerOpen};
        });
    
      };
    
    backdropClickHandler = () => {
        this.setState({sideDrawerOpen: false});
      };

    showLoginHandler = () => {
        this.setState({
            showLogin: true
        })
    }

    hideLoginHandler = () => {
        this.setState({
            showLogin: false
        })
    }

    render() {
        const authComponent = this.state.showLogin && !this.props.loggedIn
            ? <Auth show = {this.state.showLogin} click = {this.hideLoginHandler} /> 
            : null;
        return (
        <Fragment>
            <AuthContext.Provider value = {{
                showLogin: this.state.showLogin,
                showLoginHandler: this.showLoginHandler,
                hideLoginHandler: this.hideLoginHandler
            }}>
            <div>
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
                <SideDrawer show={this.state.sideDrawerOpen} backdropClickHandler={this.backdropClickHandler} />
                {authComponent}
            </div>
            </AuthContext.Provider>
            <main className={classes.Content}>
                {this.props.children}
            </main>
        </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        loggedIn: state.auth.loggedIn
    }
}

export default connect(mapStateToProps)(Layout);