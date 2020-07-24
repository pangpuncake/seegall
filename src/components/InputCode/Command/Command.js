import * as colorTypes from "../Colour";

export default function command(commandObject, datasets) {
  const type = commandObject.type;
  const fromIndex = commandObject.fromIndex;
  const toIndex = commandObject.toIndex;
  //   console.log("Command of type:", type);
  const newDataset = [...datasets];
  const newArray = [...datasets[0].data];
  const backgroundColorArray = [...datasets[0].backgroundColor];
  const hoverBackgroundArray = [...datasets[0].hoverBackgroundColor];

  switch (type) {
    case "swap":
      //   console.log("entered swap");
      let temp = newArray[fromIndex];
      newArray[fromIndex] = newArray[toIndex];
      newArray[toIndex] = temp;

      newDataset[0].data = newArray;
      newDataset[0].backgroundColor = backgroundColorArray;
      newDataset[0].hoverBackgroundColor = hoverBackgroundArray;

      return newDataset;

    case "insert":
      const fromIndexContent = datasets[0].data[fromIndex];
      newArray.splice(fromIndex, 1);
      newArray.splice(toIndex, 0, fromIndexContent);

      const backgroundContent = datasets[0].backgroundColor[fromIndex];
      backgroundColorArray.splice(fromIndex, 1);
      backgroundColorArray.splice(toIndex, 0, backgroundContent);

      const hoverBackgroundContent =
        datasets[0].hoverBackgroundColor[fromIndex];
      hoverBackgroundArray.splice(fromIndex, 1);
      hoverBackgroundArray.splice(toIndex, 0, hoverBackgroundContent);

      newDataset[0].data = newArray;
      newDataset[0].backgroundColor = backgroundColorArray;
      newDataset[0].hoverBackgroundColor = hoverBackgroundArray;

      return newDataset;

    case "highlight":
      if (toIndex !== -1) {
        backgroundColorArray[fromIndex] = colorTypes.HIGHLIGHTED_COLOR;
        backgroundColorArray[toIndex] = colorTypes.HIGHLIGHTED_COLOR;

        hoverBackgroundArray[fromIndex] = colorTypes.HIGHLIGHTED_HOVER_COLOR;
        hoverBackgroundArray[toIndex] = colorTypes.HIGHLIGHTED_HOVER_COLOR;
      }

      if (toIndex === -1) {
        backgroundColorArray[fromIndex] = colorTypes.HIGHLIGHTED_COLOR;

        hoverBackgroundArray[fromIndex] = colorTypes.HIGHLIGHTED_HOVER_COLOR;
      }

      newDataset[0].data = newArray;
      newDataset[0].backgroundColor = backgroundColorArray;
      newDataset[0].hoverBackgroundColor = hoverBackgroundArray;

      return newDataset;

    case "revertHighlight":
      if (toIndex !== -1) {
        backgroundColorArray[fromIndex] = colorTypes.NORMAL_COLOR;
        backgroundColorArray[toIndex] = colorTypes.NORMAL_COLOR;

        hoverBackgroundArray[fromIndex] = colorTypes.NORMAL_HOVER_COLOR;
        hoverBackgroundArray[toIndex] = colorTypes.NORMAL_HOVER_COLOR;
      }

      if (toIndex === -1) {
        backgroundColorArray[fromIndex] = colorTypes.NORMAL_COLOR;

        hoverBackgroundArray[fromIndex] = colorTypes.NORMAL_HOVER_COLOR;
      }

      newDataset[0].data = newArray;
      newDataset[0].backgroundColor = backgroundColorArray;
      newDataset[0].hoverBackgroundColor = hoverBackgroundArray;

      return newDataset;

    default:
      // console.log("nothing happened!");
      return [];
  }
}
