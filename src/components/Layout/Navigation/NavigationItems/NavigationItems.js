import React, { useContext } from 'react'
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'
import AuthContext from '../../../context/AuthContext/AuthContext'
import { connect } from 'react-redux'
import * as actions from '../../../../store/actions/index';

const NavigationItems = ( props ) => {

    const authContext = useContext(AuthContext);

    const logoutHandler = () => {
        props.onLogout();
    };

    let authLogin = 
        !props.loggedIn
            ? <NavigationItem click = {authContext.showLoginHandler}>
                Log In
            </NavigationItem>
            : <NavigationItem click = {logoutHandler}>
                Log Out
            </NavigationItem>

    return (
        <ul className = {classes.NavigationItems}>
            <NavigationItem link = "/" active>Algorithms</NavigationItem>
            <NavigationItem link = "/">Input Your Code</NavigationItem>
            <NavigationItem link = "/">Forum</NavigationItem>
            {authLogin}
        </ul>
    )
}

const mapStateToProps = state => {
    return {
        loggedIn: state.auth.loggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.logout())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationItems);
