window.x = 1;
const context = { x: 2 };

function testThis(y){
  console.log(`x=${this.x}, y=${y}`);
}

testThis(100); // x=1, y=100
const boundFunction = bind(testThis, context);
boundFunction(100); // x=2, y=100

function bind(fn, context) {
  return function() {
    const arr = [];
    for (let i = 0; i < arguments.length; i++) {
      arr.push(arguments[i]);
    }
    return fn.apply(context, arr);
  }
}
