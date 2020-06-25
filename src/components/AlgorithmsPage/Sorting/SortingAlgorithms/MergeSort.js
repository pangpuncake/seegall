export function mergeSort(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const tempArr = array.slice();
  sort(array, 0, array.length - 1, animations, tempArr);
  return animations;
}

//see merge sort code
function sort(array, startIdx, endIdx, animations, tempArr) {
  if (startIdx === endIdx) {
    return;
  }
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  sort(tempArr, startIdx, middleIdx, animations, array);
  sort(tempArr, middleIdx + 1, endIdx, animations, array);
  merge(array, startIdx, middleIdx, endIdx, animations, tempArr);
}

function merge(array, startIdx, middleIdx, endIdx, animations, tempArr) {
  let n1 = startIdx;
  let n2 = startIdx;
  let n3 = middleIdx + 1;
  while (n1 <= middleIdx && n3 <= endIdx) {
    animations.push([n1, n3]);
    animations.push([n1, n3]);
    if (tempArr[n1] <= tempArr[n3]) {
      animations.push([n2, tempArr[n1]]);
      array[n2] = tempArr[n1];
      n1++;
    } else {
      animations.push([n2, tempArr[n3]]);
      array[n2] = tempArr[n3];
      n3++;
    }
    n2++;
  }

  while (n1 <= middleIdx) {
    animations.push([n1, n1]);
    animations.push([n1, n1]);
    animations.push([n2, tempArr[n1]]);
    array[n2] = tempArr[n1];
    n1++;
    n2++;
  }

  while (n3 <= endIdx) {
    animations.push([n3, n3]);
    animations.push([n3, n3]);
    animations.push([n2, tempArr[n3]]);
    array[n2] = tempArr[n3];
    n3++;
    n2++;
  }
}
