import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import "../../../node_modules/codemirror/lib/codemirror.css";
import { Controlled as CodeMirror } from "react-codemirror2";
require("codemirror/mode/xml/xml");
require("codemirror/mode/javascript/javascript");

class CodeMirrorEditor extends Component {
  state = {
    code: ``,
  };

  updateCodeHandler = () => {
    console.log("redux store changing ", this.state.code);
    this.props.onUpdate(this.state.code);
  };

  updateState = (code) => {
    // console.log(code)
    this.setState({
      code: code,
    });
  };

  render() {
    const options = {
      lineNumbers: true,
      mode: "javascript",
      theme: "midnight",
      spellcheck: true,
      autocorrect: true,
    };
    return (
      <div style={{ textAlign: "left", marginLeft: "600px" }}>
        <CodeMirror
          autoFocus
          value={this.state.code}
          className={"CodeMirror"}
          onBeforeChange={(editor, data, value) => this.updateState(value)}
          onBlur={(editor, data, value) => this.updateCodeHandler()}
          options={options}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    code: state.post.code,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdate: (code) => dispatch(actions.updateCode(code)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CodeMirrorEditor);
