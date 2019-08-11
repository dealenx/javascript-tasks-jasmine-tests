let count = function(obj) {
  return Object.keys(obj).length;
};

let a = { a: 1, b: 2 };
console.log(count(a)); // 2
let b = function() {};
console.log(count(b)); // 0
let c = [1, 2, 3];
console.log(count(c)); // 3
let d = [];
d[100] = 1;
console.log(count(d)); // 1
