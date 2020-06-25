import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PathfindingVisualiser from './PathfindingVisualiser/PathfindingVisualiser'
import SortingVisualiser from './Sorting/Sorting'
import AlgoItems from './AlgoItems/AlgoItems'

const AlgorithmsPage = () => {
    return (
        <Switch>
            <Route path='/algo' exact component={AlgoItems} />
            <Route path='/algo/sorting' exact component={SortingVisualiser} />
            <Route path='/algo/pathfinding' exact component={PathfindingVisualiser} />
        </Switch>
    )
}

export default AlgorithmsPage
