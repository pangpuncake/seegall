import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index'
import '../../../node_modules/codemirror/lib/codemirror.css'
import {Controlled as CodeMirror} from 'react-codemirror2'
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');

class CodeMirrorEditor extends Component {

    updateCodeHandler = ( code ) => {
        console.log('called')
        this.props.onUpdate(code);
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
        const options = {
            lineNumbers: true,
            mode: 'javascript',
            theme: 'midnight',
            spellcheck: true,
            autocorrect: true
        }
        return (
            <div style = {{textAlign: 'leftx'}}>
                <CodeMirror 
                    autoFocus
                    value = {this.props.code}
                    className = {'CodeMirror'}
                    onChange = {(editor, data, value) => console.log('changed') }
                    options = {options} />
                {/* <button onClick = {this.runCodeHandler}>Submit Post!</button> */}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        code: state.post.code
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onUpdate: (code) => dispatch(actions.updateCode(code))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CodeMirrorEditor);

