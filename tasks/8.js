let characters = [{ name: "barney", age: 36 }, { name: "fred", age: 40 }];

let pluck = function(objects, fieldName) {
  let arr = [];

  for (let i = 0; i < objects.length; i++) {
    arr.push(objects[i][fieldName]);
  }

  return arr;
};

console.log(pluck(characters, "name")); // ['barney', 'fred']
