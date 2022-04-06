let max;
let min;

function main(arrays) {
  const pointers = [];

  for (let i = 0; i < arrays.length; i++) {
    pointers.push(0);
  }

  let found = false;

  while (!found) {
    let newMax = 0;
    let newMin = arrays[0][pointers[0]] + 1;
    let minIndex = 0;

    for (let i = 0; i < arrays.length; i++) {
      const currentNumber = arrays[i][pointers[i]];

      if (currentNumber > newMax) newMax = currentNumber;

      if (currentNumber < newMin) {
        newMin = currentNumber;
        minIndex = i;
      }
    }
    pointers[minIndex]++;
    if (pointers[minIndex] >= arrays[minIndex].length) found = true;
    compareRange(newMax, newMin);
  }

  return [min, max];
}

function compareRange(newMax, newMin) {
  if (max == undefined && min == undefined) {
    min = newMin;
    max = newMax;
    return;
  }

  const subs1 = newMax - newMin;
  const subs2 = max - min;

  if (subs1 > subs2) return;

  if (subs1 == subs2 && newMax > max) return;

  min = newMin;
  max = newMax;
}

console.log(
  main([
    [4, 10, 15, 24, 26],
    [0, 9, 12, 20],
    [5, 18, 22, 30],
  ])
);
