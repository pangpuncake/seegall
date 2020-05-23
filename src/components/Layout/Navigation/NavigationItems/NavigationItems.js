import React from 'react'
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

const NavigationItems = ( props ) => {
    return (
        <ul className = {classes.NavigationItems}>
            <NavigationItem link = "/" active>Algorithms</NavigationItem>
            <NavigationItem link = "/">Input Your Code</NavigationItem>
            <NavigationItem link = "/">Forum</NavigationItem>
            <NavigationItem link = "/">Log In</NavigationItem>
        </ul>
    )
}

export default NavigationItems
