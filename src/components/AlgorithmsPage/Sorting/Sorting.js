import React from "react";
import SortingVisualiser from "./SortingVisualiser/SortingVisualiser";
import Box from "./Explanations/Box";

const Sorting = (props) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SortingVisualiser></SortingVisualiser>
      <Box></Box>
    </div>
  );
};

export default Sorting;
