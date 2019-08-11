var input = [1, 2, 3, 4, 5, 6];

function isEven(x) {
  return x % 2 == 0;
} // проверяет на четность

let filter = function(arr, fn) {
  let returnedArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i])) {
      returnedArr.push(arr[i]);
    }
  }

  return returnedArr;
};

console.log(filter(input, isEven)); // [2, 4, 6]
