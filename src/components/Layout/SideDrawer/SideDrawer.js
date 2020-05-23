import React, { Fragment } from 'react';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Backdrop from '../../Backdrop/Backdrop';

const sideDrawer = props => {
    let drawerClasses = [classes.SideDrawer];
    if (props.show) {
        drawerClasses = [classes.SideDrawer, classes.Open];
    }
 
    return (
        <Fragment>
            <Backdrop show={props.show} click={props.backdropClickHandler} />
            <div className={drawerClasses.join(' ')}>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Fragment>
    );
};

export default sideDrawer;