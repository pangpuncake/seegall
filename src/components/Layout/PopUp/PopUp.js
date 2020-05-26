import React, { Component, Fragment } from 'react'
import classes from './PopUp.module.css'
import Backdrop from '../../Backdrop/Backdrop'

class PopUp extends Component {

    shouldComponentUpdate = (nextProps, nextState) => {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }
    
    render() {
        return ( 
            <Fragment>
                <Backdrop 
                    show = {this.props.show}
                    click = {this.props.click} />
                <div
                    className = {classes.PopUp}
                    style = {{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'}}>
                    {this.props.children}
                </div>
            </Fragment>);
    };
}

export default PopUp
