import React from 'react'
import classes from './Bars.module.css'

const Bars = (props) => {
    return (
        <div 
            className = {classes.arrayBar} 
            style = {{height: `${props.height}rem`, backgroundColor: `${props.color}`}}
        />
    )
}

export default Bars
