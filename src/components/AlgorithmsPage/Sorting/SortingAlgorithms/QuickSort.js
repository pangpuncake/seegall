export function quickSort(array) {
  const animations = [];
  const tempArr = array.slice();
  if (array.length <= 1) return array;
  sort(tempArr, 0, tempArr.length - 1, animations);
  return animations;
}

function sort(tempArr, lowIdx, highIdx, animations) {
  let i;
  if (lowIdx < highIdx) {
    i = partition(tempArr, lowIdx, highIdx, animations);
    sort(tempArr, lowIdx, i - 1, animations);
    sort(tempArr, i + 1, highIdx, animations);
  }
}

function partition(tempArr, lowIdx, highIdx, animations) {
  let pivot = tempArr[highIdx];
  let i = lowIdx;
  for (let j = lowIdx; j <= highIdx - 1; j++) {
    animations.push([j, highIdx]);
    animations.push([j, highIdx]);
    if (tempArr[j] <= pivot) {
      //animate swapping
      animations.push([j, tempArr[i]]);
      animations.push([i, tempArr[j]]);
      swap(tempArr, j, i);
      i++;
    } else {
      animations.push([-1, -1]);
      animations.push([-1, -1]);
    }
  }
  animations.push([-1, -1]);
  animations.push([-1, -1]);

  //animate swapping
  animations.push([i, tempArr[highIdx]]);
  animations.push([highIdx, tempArr[i]]);
  swap(tempArr, i, highIdx);
  return i;
}

function swap(tempArr, first, second) {
  let temp = tempArr[first];
  tempArr[first] = tempArr[second];
  tempArr[second] = temp;
}
