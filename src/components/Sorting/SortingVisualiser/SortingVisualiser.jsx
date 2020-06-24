import React from "react";
import "./SortingVisualiser.css";
import { mergeSort } from "../SortingAlgorithms/MergeSort";
import { bubbleSort } from "../SortingAlgorithms/BubbleSort";
import Slider from "../Slider/Slider";
import { quickSort } from "../SortingAlgorithms/QuickSort";
import COLORS from "../Layout/Colours";

const NUM_BARS = 40;
const ORIGINAL_COLOR = COLORS.blue;
const CHECKING_COLOR = COLORS.maroon;

export default class SortingVisualiser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
      speed: 10,
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  changeSpeedHandler(value) {
    this.setState({ speed: value });
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < NUM_BARS; i++) {
      array.push(randomInt(5, 700));
    }
    this.setState({ array });
  }

  mergeSortVisualisation() {
    const animations = mergeSort(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrBar = document.getElementsByClassName("bar");
      const isColourChange = i % 3 !== 2;
      if (isColourChange) {
        const [bar1, bar2] = animations[i];
        const bar1Style = arrBar[bar1].style;
        const bar2Style = arrBar[bar2].style;
        const color = i % 3 === 0 ? CHECKING_COLOR : ORIGINAL_COLOR;
        setTimeout(() => {
          bar1Style.backgroundColor = color;
          bar2Style.backgroundColor = color;
        }, i * this.state.speed);
      } else {
        setTimeout(() => {
          const [bar1, newHeight] = animations[i];
          const bar1Style = arrBar[bar1].style;
          bar1Style.height = `${newHeight}px`;
        }, i * this.state.speed);
      }
    }
  }

  bubbleSortVisualisation() {
    const animations = bubbleSort(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const isColorChange = i % 4 === 0 || i % 4 === 1;
      const arrBar = document.getElementsByClassName("bar");
      if (isColorChange) {
        const [bar1, bar2] = animations[i];
        const bar1Style = arrBar[bar1].style;
        const bar2Style = arrBar[bar2].style;
        const color = i % 4 === 0 ? CHECKING_COLOR : ORIGINAL_COLOR;
        setTimeout(() => {
          bar1Style.backgroundColor = color;
          bar2Style.backgroundColor = color;
        }, i * this.state.speed);
      } else {
        const [barIndex, newHeight] = animations[i];
        if (barIndex === -1) {
          continue;
        }
        const barStyle = arrBar[barIndex].style;
        setTimeout(() => {
          barStyle.height = `${newHeight}px`;
        }, i * this.state.speed);
      }
    }
  }

  quickSortVisualisation() {
    const animations = quickSort(this.state.array);
    for (let i = 0; i < animations.length - 1; i++) {
      const isColorChange = i % 4 === 0 || i % 4 === 1;
      const arrBar = document.getElementsByClassName("bar");
      if (isColorChange) {
        const [bar1, bar2] = animations[i];
        if (bar1 === -1) {
          continue;
        }
        const bar1Style = arrBar[bar1].style;
        const bar2Style = arrBar[bar2].style;
        const color = i % 4 === 0 ? CHECKING_COLOR : ORIGINAL_COLOR;

        setTimeout(() => {
          bar1Style.backgroundColor = color;
          bar2Style.backgroundColor = color;
        }, i * this.state.speed);
      } else {
        const [barIndex, newHeight] = animations[i];
        if (barIndex === -1) {
          continue;
        }
        const barStyle = arrBar[barIndex].style;
        setTimeout(() => {
          barStyle.height = `${newHeight}px`;
        }, i * this.state.speed);
      }
    }
  }

  render() {
    const { array } = this.state;
    return (
      <div>
        <div className="button">
          <button onClick={() => this.resetArray()}>Get new array!</button>
          <button onClick={() => this.mergeSortVisualisation()}>
            Merge Sort
          </button>
          <button onClick={() => this.bubbleSortVisualisation()}>
            Bubble Sort
          </button>
          <button onClick={() => this.quickSortVisualisation()}>
            Quick Sort
          </button>
        </div>
        <div className="slider">
          <Slider
            value={this.state.speed}
            onChange={(event, value) => this.changeSpeedHandler(value)}
            onChangeCommitted={(event, value) => this.changeSpeedHandler(value)}
          />
        </div>
        <div className="container">
          {array.map((value, idx) => (
            <div
              className="bar"
              key={idx}
              style={{ height: `${value}px`, backgroundColor: ORIGINAL_COLOR }}
            ></div>
          ))}
        </div>
      </div>
    );
  }
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
