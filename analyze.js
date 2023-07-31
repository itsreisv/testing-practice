function averageArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  let average = sum / array.length
  return average;
}

function minArray(array) {
  return Math.min(...array);
}

function maxArray(array) {
  return Math.max(...array);
}

function lengthArray(array) {
  return array.length;
}

function analyzeArray(array) {
  const obj =  {
    min: minArray(array),
    max: maxArray(array),
    length: lengthArray(array),
    average: averageArray(array)
  }
  return obj;
}

module.exports = analyzeArray;