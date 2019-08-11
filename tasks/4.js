function sequence(start = 0, step = 1) {

    let generatedFunctionSequence = generateSequence(start, step);

    function* generateSequence(startSeq, stepSeq) {
        let sum = startSeq;

        while (true) {

            yield sum;
            sum += stepSeq;
        }
    }

    return function () {
        return generatedFunctionSequence.next().value;
    };
}

var fmap = function (a, gen) {
    return function () {
        let x = gen.apply(null, arguments);
        return a(x);
    }
}

function square(x) { return x * x; }

function add(a, b) {
    return a + b;
}

var gen = sequence(1, 1);
var squareGen = fmap(square, gen);

console.log(squareGen()); // 1
console.log(squareGen()); // 4

// Мы получаем новую функцию, которая вызвает add, и результат пропускает через функцию square
/*var squareAdd = fmap(square, add);
console.log(squareAdd(2, 3)); // 25 = (2 + 3) ^ 2
console.log(squareAdd(5, 7)); // 144 = (5 + 7) ^ 2

*/