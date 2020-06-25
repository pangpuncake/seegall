import React from 'react'
import AlgoItem from '../AlgoItem/AlgoItem'
import classes from './AlgoItems.module.css'

const AlgoItems = () => {
    return (
        <div className={classes.AlgoItems}>
            <AlgoItem link='/algo/sorting' image='sortingicon'>Sorting</AlgoItem>
            <AlgoItem link='/algo/pathfinding' image='pathfindingicon'>Pathfinding</AlgoItem>
        </div>
    )
}

export default AlgoItems
