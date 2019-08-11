function add(a, b) { return a + b; }
function mult(a, b, c, d) { return a * b * c * d; }

function partial(fn) {

    let fixedArgs = [];

    for(let i = 1; i < arguments.length; i++) {
        fixedArgs.push(arguments[i]);
    }

    return function() {

        let allArguments = [...fixedArgs];
        
        for(let i = 0; i < arguments.length; i++) {
            allArguments.push(arguments[i]);
        }
    
        return fn.apply(null, allArguments);
    }
}

var add5 = partial(add, 5); // Мы получили функцию с 1 аргументом, которая прибавляет к любому числу 5

console.log(add5(2)); // 7

var mult23 = partial(mult, 2, 3); // мы зафиксировали первые 2 аргумента mult() как 2 и 3

console.log(mult23(4, 5)); // 2*3*4*5 = 120
console.log(mult23(1, 1)); // 2*3*1*1 = 6