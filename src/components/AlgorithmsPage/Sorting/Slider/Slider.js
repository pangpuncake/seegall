import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { ThemeProvider } from "@material-ui/styles";
import "./Slider.css";
import COLORS from "../Layout/Colours";

const muiTheme = createMuiTheme({
  overrides: {
    MuiSlider: {
      thumb: {
        color: COLORS.maroon,
      },
      track: {
        color: COLORS.purple,
      },
      rail: {
        color: COLORS.violet,
      },
      root: {
        width: 300,
        marginLeft: 200,
        marginTop: 30,
      },
    },
  },
});

function valuetext(value) {
  return `${value}`;
}

export default function DiscreteSlider(props) {
  return (
    <ThemeProvider theme={muiTheme}>
      <Typography className='container' id='discrete-slider' gutterBottom>
        <h4 className='title'>Sorting Speed</h4>
      </Typography>
      <Slider
        value={props.value}
        onChange={props.onChange}
        defaultValue={10}
        getAriaValueText={valuetext}
        aria-labelledby='discrete-slider'
        valueLabelDisplay='auto'
        step={10}
        marks
        min={10}
        max={150}
      />
    </ThemeProvider>
  );
}
