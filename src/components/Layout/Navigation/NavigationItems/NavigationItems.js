import React, { useContext } from 'react'
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'
import AuthContext from '../../../context/AuthContext/AuthContext'

const NavigationItems = ( props ) => {

    const authContext = useContext(AuthContext);

    return (
        <ul className = {classes.NavigationItems}>
            <NavigationItem link = "/" active>Algorithms</NavigationItem>
            <NavigationItem link = "/">Input Your Code</NavigationItem>
            <NavigationItem link = "/">Forum</NavigationItem>
            <NavigationItem click = {authContext.showLoginHandler}>
                Log In
            </NavigationItem>
        </ul>
    )
}

export default NavigationItems
