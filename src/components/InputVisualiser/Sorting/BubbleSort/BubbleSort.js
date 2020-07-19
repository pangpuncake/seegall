import React, { Component } from 'react'
import Bars from '../Bars/Bars'

class BubbleSort extends Component {

    state = {
        array: [<Bars height = '3' color = {'white'} />, <Bars height = '4' color = {'white'} />, <Bars height = '5' color = {'white'} />],
        updated: false
    }

    // setArrayHandler = (index, object) => {
    //     const prevArray = [...this.state.array]
    //     prevArray[index] = object
    //     this.setState({
    //         array: prevArray,
    //     })
    // }

    // toggleUpdatedHandler = () => {
    //     this.setState((prevState) => {
    //         return {
    //             updated: !prevState.updated
    //         }
    //     })
    // }

    // createArray = () => {
    //     for (i = 1; i < 11; i++) {
    //         this.setArrayHandler(i, <Bars height = {i} color = {'blue'} /> );
    //     }
    // }

    // componentDidMount() {
    //     //this.createArray();
    // }

    // shouldComponentUpdate() {
    //     return updated;
    // }

    render() {
    
        return (
            <div style = {{width: '100%', height: '100%', display: 'flex'}}>
                {this.state.array}
            </div>
        )
    }
}

export default BubbleSort
