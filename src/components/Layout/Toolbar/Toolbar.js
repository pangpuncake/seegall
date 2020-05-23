import React from 'react';
import Logo from '../../Logo/Logo';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton/DrawerToggleButton';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';
import classes from './Toolbar.module.css';

const toolbar = props => (
    <header className={classes.Toolbar}>
            <DrawerToggleButton click={props.drawerClickHandler} />
            <div>
                <Logo height = '80%' />
            </div>
            <div className = {classes.Logo}>
                <a href = "/">Seegall</a>
            </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;