var ctx = { x: 2 };

function testThis(a) {
  console.log("x=" + this.x + ", a=" + a); 
}

function bind(fn, context) {
    return function() {
    	return fn.apply(context, arguments);
    }
}

var boundFunction = bind(testThis, ctx);
boundFunction(100); // x=2, a= 100