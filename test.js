function sum(a, b) {
    return a + b;
}

function test(fn) {

    let fixedArgs = {
        elements: [],
        valueByFn: 0
    };

    for(let i = 1; i < arguments.length; i++) {
        fixedArgs.elements.push(arguments[i]);
    }

    return function() {

        for(let i = 0; i < arguments.length; i++) {
            fixedArgs.elements.push(arguments[i]);
        }

        let x = fn.apply(null, fixedArgs.elements);
        return x;
    }
}

let my = test(sum,5);
console.log(my(3));