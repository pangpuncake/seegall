import React from 'react';

import classes from './DrawerToggleButton.module.css';

const drawerToggleButton = props => (
    <div className = {classes.DrawerToggleButton} onClick={props.click}>
        <div className = {classes.Line}/>
        <div className = {classes.Line}/>
        <div className = {classes.Line}/>
    </div>
);

export default drawerToggleButton;