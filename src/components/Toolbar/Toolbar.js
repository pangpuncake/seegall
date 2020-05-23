import React from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

import Logo from './bluelogo1.png';

const toolbar = props => (
    <header className="toolbar">
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400&display=swap" rel="stylesheet"></link>
        <nav className="toolbar_navigation">
            <div className="toolbar_toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div>
                <img src={Logo} alt="website logo" />
            </div>
            <div className = "toolbar_logo"><a href = "/">Seegall</a></div>
            <div className="toolbar_navigation-items">
                <ul>
                    <li><a href = "/">Algorithms</a></li>
                    <li><a href = "/">Input Your Code</a></li>
                    <li><a href = "/">Forums</a></li>
                    <li><a href = "/">Log In</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;