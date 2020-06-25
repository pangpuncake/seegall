import React from 'react'
import classes from './AlgoItem.module.css'
import { NavLink } from 'react-router-dom'

const AlgoItem = (props) => {
    return (
        <div className={classes.AlgoItem}>
            <img src={require(`../../../assets/images/${props.image}.png`)} alt="" />
            <NavLink
                to={props.link}
                exact
                activeClassName={classes.active}>
                {props.children}
            </NavLink>
        </div>
    )
}

export default AlgoItem
