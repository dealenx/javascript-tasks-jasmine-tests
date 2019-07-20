// Скопировано с 1 задания
function sequence(start = 0, step = 1) {

    let generatedFunctionSequence = generateSequence(start, step);

    function* generateSequence(startSeq, stepSeq) {
        let sum = startSeq;
        yield startSeq;
        while (true) {
            sum += stepSeq;
            yield sum;
        }
    }

    return function () {
        return generatedFunctionSequence.next().value;
    };
}

function take(gen, n) {
    function* generateSequence(genLocal, end) {
        for (let i = 0; i < end; i++) {
            yield genLocal();
        }
    }
    return [...generateSequence(gen, n)];
}

var gen2 = sequence(0, 2);
console.log(take(gen2, 5)); // [0, 2, 4, 6, 8 ]