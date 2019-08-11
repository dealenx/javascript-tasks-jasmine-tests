function test(a, b, c) { return 'a=' + a + ',b=' + b + ',c=' + c; }
function test2(a, b, c, d) { return 'a=' + a + ',b=' + b + ',c=' + c + ',d=' + d; }
function partialAny(fn) {

    let fixedArgs = [];

    for(let i = 1; i < arguments.length; i++) {
        fixedArgs.push(arguments[i]);
    }

    return function() {

        let fixedLocalArgs = [...fixedArgs];

        let counterNewArgs =0;
        for(let i =0; i <  fixedLocalArgs.length; i++) {
            if(fixedLocalArgs[i] === undefined) {
                fixedLocalArgs[i] = arguments[counterNewArgs];
                counterNewArgs++;
            }
        }

        console.log(fixedLocalArgs);
    
        return fn.apply(null, fixedLocalArgs);
    }
}

var test1_3 = partialAny(test, 1, undefined, undefined);

console.log(test1_3(2, 3)); // a=1,b=5,c=3