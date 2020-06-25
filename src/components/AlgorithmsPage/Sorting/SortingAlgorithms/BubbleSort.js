export function bubbleSort(array) {
  const animations = [];
  const tempArr = array.slice();
  if (array.length <= 1) return array;
  sort(array.length, tempArr, animations);
  return animations;
}

function sort(endIdx, tempArr, animations) {
  let n = endIdx;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      animations.push([j, j + 1]);
      animations.push([j, j + 1]);
      if (tempArr[j] > tempArr[j + 1]) {
        //animate swapping
        animations.push([j, tempArr[j + 1]]);
        animations.push([j + 1, tempArr[j]]);
        swap(tempArr, j, j + 1);
      } else {
        animations.push([-1, -1]);
        animations.push([-1, -1]);
      }
    }
  }
}

function swap(tempArr, firstIdx, nextIdx) {
  let temp = tempArr[firstIdx];
  tempArr[firstIdx] = tempArr[nextIdx];
  tempArr[nextIdx] = temp;
}
