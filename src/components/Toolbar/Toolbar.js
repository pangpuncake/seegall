import React from 'react';
import Logo from '../../components/Logo/Logo';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import NavigationItems from '../Layout/Navigation/NavigationItems/NavigationItems';
import './Toolbar.css';

const toolbar = props => (
    <header className="toolbar">
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400&display=swap" rel="stylesheet"></link>
        <nav className="toolbar_navigation">
            <div className="toolbar_toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div>
                <Logo height = '80%' />
            </div>
            <div className = "toolbar_logo"><a href = "/">Seegall</a></div>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;