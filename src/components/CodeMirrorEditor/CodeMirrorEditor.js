import React, { Component } from 'react'
import classes from '../../../node_modules/codemirror/lib/codemirror.css'

class CodeMirrorEditor extends Component {

   
    state = {
        code: ``,
        array: [1,2,3,4],
        runCode: null
    }

    updateCodeHandler = ( code ) => {
        this.setState({
            code: code
        })
    }

    // runCodeHandler = () => {
    //     const runCode = eval(this.state.code);
    //     console.log( runCode);
    //     this.setState({
    //         runCode: runCode
    //     })
    //     console.log(runCode(this.state.array));
    // }

    render() {
        let Codemirror = require('react-codemirror');
        require('codemirror/mode/javascript/javascript');
        require('codemirror/mode/python/python');
        require('codemirror/mode/xml/xml');
        require('codemirror/mode/markdown/markdown');
        const options = {
            lineNumbers: true,
            mode: 'javascript',
        }
        return (
            <div>
                <Codemirror 
                    className = {classes}
                    value = {this.state.code} 
                    onChange = {this.updateCodeHandler}
                    options = {options} />
                <button onClick = {this.runCodeHandler}>Run Visualisation!</button>
        <p></p>
            </div>
        )
    }
}

export default CodeMirrorEditor
