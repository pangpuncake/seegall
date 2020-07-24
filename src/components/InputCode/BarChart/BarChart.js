import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import command from "../Command/Command";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";

import * as colorTypes from "../Colour";

class BarChart extends Component {
  state = {
    labels: [],
    datasets: [
      {
        label: "Sorting",
        backgroundColor: colorTypes.NORMAL_COLOR,
        borderColor: colorTypes.NORMAL_BORDER_COLOR,
        borderWidth: 1,
        hoverBackgroundColor: colorTypes.NORMAL_HOVER_COLOR,
        hoverBorderColor: colorTypes.HIGHLIGHTED_HOVER_BORDER_COLOR,
        data: [],
      },
    ],
    arrayString: "",
    currentCommand: 0,
    speed: 0.5,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.commands !== this.props.commands) {
      this.resetCommandHandler();
    }
  }

  resetCommandHandler = () => {
    this.setState({
      currentCommand: 0,
    });
  };

  randomiseHandler = () => {
    // console.log("randomiseHandler");
    const randomArray = Array.from({ length: 40 }, () =>
      Math.floor(Math.random() * 40)
    );
    this.setArrayHandler(randomArray);
  };

  editArrayHandler = (event) => {
    // console.log("editArrayHandler");
    this.setState({
      arrayString: event.target.value,
    });
  };

  setDatasetsHandler = (result) => {
    this.setState({
      labels: result[0].data,
      datasets: result,
    });
  };

  setArrayHandler = (array) => {
    let newDatasets = [...this.state.datasets];
    // console.log(array);
    const backgroundColorArray = new Array(array.length).fill(
      colorTypes.NORMAL_COLOR
    );
    const hoverBackgroundColorArray = new Array(array.length).fill(
      colorTypes.NORMAL_HOVER_COLOR
    );
    newDatasets[0].data = array;
    newDatasets[0].backgroundColor = backgroundColorArray;
    newDatasets[0].hoverBackgroundColor = hoverBackgroundColorArray;

    this.setState({
      labels: array,
      datasets: newDatasets,
      currentCommand: 0,
    });
    this.props.setArray(array);
  };

  editSpeedHandler = (event) => {
    this.setState({
      speed: event.target.value,
    });
  };

  setSpeedHandler = () => {
    // console.log(this.state.speed);
    this.setState({
      speed: this.state.speed,
    });
  };

  nextCommand = () => {
    if (
      this.props.commands &&
      this.props.commands.length > 0 &&
      this.state.currentCommand < this.props.commands.length
    ) {
      this.setDatasetsHandler(
        command(
          this.props.commands[this.state.currentCommand],
          this.state.datasets
        )
      );
      this.setState((prevState) => {
        return {
          currentCommand: prevState.currentCommand + 1,
        };
      });
    }
  };

  timer = (ms) => {
    return new Promise((res) => setTimeout(res, ms));
  };

  runCommandsHandler = async () => {
    for (var i = 0; i < this.props.commands.length; i++) {
      await this.timer(this.state.speed * 1000);
      this.nextCommand();
    }
  };

  render() {
    return (
      <div style={{ padding: "2%", textAlign: "center" }}>
        <input
          type="input"
          onChange={this.editArrayHandler}
          placeholder="Create array! E.g. 1,2,3"
        />
        <button
          onClick={() =>
            this.setArrayHandler(
              this.state.arrayString.split(",").map((num) => +num)
            )
          }
        >
          Set Array
        </button>
        <button onClick={this.randomiseHandler}>Randomise Array!</button>

        <input
          onChange={this.editSpeedHandler}
          placeholder="Set speed in seconds!"
        />
        <button onClick={this.setSpeedHandler}>Set Speed</button>
        <Bar
          data={this.state}
          options={{
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
            animation: false,
            legend: false,
            responsive: true,
            maintainAspectRatio: false,
          }}
          width={100}
          height={500}
        />
        <button onClick={this.runCommandsHandler}>Run Full Sequence!</button>
        <button onClick={this.nextCommand}>Next Command</button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    commands: state.code.commands,
    loading: state.code.loading,
    error: state.code.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setArray: (array) => dispatch(actions.setArray(array)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BarChart);
