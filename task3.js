function square(x) { return x * x; } // возведение в квадрат


function map(fn, array) {
    return array.map(function(item){
        return fn(item);
    });
}

console.log(map(square, [1, 2, 3, 4])); 