//console.log 

const foo = { name: 'tom', age: 30, nervous: false };
const bar = { name: 'james', age: 40, nervous: false };
const baz = { name: 'harry', age: 50, nervous: true };

//Bad code
console.log(foo);
console.log(bar);
console.log(baz);

//Good code with computed property names
console.log({foo, bar, baz})

//Adding style to console.log
console.log('%c Test', 'color: orange, font-weight: bold');
console.log({foo, bar, baz})

//console.table(array of objects)
console.log([foo, bar, baz])


//console.time
console.log('looper);

let i = 0;
while (i < 10000) { i ++ }

console.timeEnd('looper);
