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


var generator = sequence(10, 3);
var generator2 = sequence(7, 1);

console.log(generator()); // 10
console.log(generator()); // 13

console.log(generator2()); // 7

console.log(generator()); // 16

console.log(generator2()); // 8