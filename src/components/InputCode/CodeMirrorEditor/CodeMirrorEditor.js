import React, { Component } from "react";
// import "../../../../node_modules/codemirror/lib/codemirror.css";
import { Controlled as CodeMirror } from "react-codemirror2";
import { connect } from "react-redux";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import CircularProgress from "@material-ui/core/CircularProgress";
require("codemirror/mode/javascript/javascript");

class CodeMirrorEditor extends Component {
  render() {
    const style = {
      paddingTop: "2%",
      paddingBottom: "2%",
      textAlign: "left",
    };

    const options = {
      lineNumbers: true,
      mode: "javascript",
      theme: "material",
      spellcheck: true,
      autocorrect: true,
    };

    let codeMirror = (
      <CodeMirror
        autoFocus
        value={this.props.value}
        className={"CodeMirror"}
        onBeforeChange={(editor, data, value) => this.props.onChange(value)}
        //   onBlur={(editor, data, value) =>
        //     this.props.updateCode(this.props.algorithm, value)
        //   }
        options={options}
      />
    );

    if (this.props.loading) {
      codeMirror = (
        <div
          style={{ paddingTop: "2%", textAlign: "center", paddingBottom: "2%" }}
        >
          <CircularProgress />
        </div>
      );
    }

    return <div style={style}>{codeMirror}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.code.loading,
    error: state.code.error,
    // code: state.code.code,
    // algorithm: state.code.algorithm,
  };
};

export default connect(mapStateToProps)(CodeMirrorEditor);

// let bubbleSort = (inputArr) => {
//   let len = inputArr.length;
//   for (let i = 0; i < len; i++) {
//     for (let j = 0; j < len; j++) {
//       if (inputArr[j] > inputArr[j + 1]) {
//         let tmp = inputArr[j];
//         inputArr[j] = inputArr[j + 1];
//         inputArr[j + 1] = tmp;
//         command("swap", j, j + 1);
//       }
//     }
//   }
//   return inputArr;
// };
// bubbleSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);

// const insertion_Sort = (inputArr) => {
//   for (let i = 1; i < inputArr.length; i++) {
//     let j = i - 1;
//     let temp = inputArr[i];
//     while (j >= 0 && inputArr[j] > temp) {
//       inputArr[j + 1] = inputArr[j];
//       j--;
//     }
//     inputArr[j + 1] = temp;
//     command("insert", i, j + 1);
//   }
//   return inputArr;
// };

// insertion_Sort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);

//Do not modify the function name.
// const createFunction = (arr) => {
//     //Your code here
//     return arr;
// };

// const bubbleSort = (inputArr) => {
//     let len = inputArr.length;
//     for (let i = 0; i < len; i++) {
//       for (let j = 0; j < len; j++) {
//         if (inputArr[j] > inputArr[j + 1]) {
//           let tmp = inputArr[j];
//           inputArr[j] = inputArr[j + 1];
//           inputArr[j + 1] = tmp;
//           command("swap", j, j + 1);
//         }
//       }
//     }
//     return inputArr;
//   };

// const merge = (leftArr, rightArr) => {
//   var sortedArr = [];
//   while (leftArr.length && rightArr.length) {
//     if (leftArr[0] <= rightArr[0]) {
//       sortedArr.push(leftArr[0]);
//       leftArr = leftArr.slice(1);
//     } else {
//       sortedArr.push(rightArr[0]);
//       rightArr = rightArr.slice(1);
//     }
//   }
//   while (leftArr.length) sortedArr.push(leftArr.shift());
//   while (rightArr.length) sortedArr.push(rightArr.shift());
//   return sortedArr;
// };
// const mergeSort = (arr) => {
//   if (arr.length < 2) {
//     return arr;
//   } else {
//     var midpoint = parseInt(arr.length / 2);
//     var leftArr = arr.slice(0, midpoint);
//     var rightArr = arr.slice(midpoint, arr.length);
//     return merge(mergeSort(leftArr), mergeSort(rightArr));
//   }
// };
