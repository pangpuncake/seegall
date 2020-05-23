import React from 'react';

import './SideDrawer.css';

const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    return (
    <nav className={drawerClasses}>
        <ul>
            <li><a href="/">Algorithms</a></li>
            <li><a href="/">Input Your Code</a></li>
            <li><a href="/">Forum</a></li>
            <li><a href="/">Log In</a></li>
            <li><a href="/">Sign Up</a></li>
        </ul>
    </nav>
    );
};

export default sideDrawer;