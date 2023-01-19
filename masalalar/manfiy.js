let t = [-1, -2, -3, 5, 6, 1];
let positiveArr = [];
let negativeArr = [];



t.forEach(function (item) {
  if (item < 0) {
    negativeArr.push(item);
  } else {
    positiveArr.push(item);
  }
});
console.log(positiveArr);
console.log(negativeArr);