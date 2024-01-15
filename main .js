
// assigning variables:
// var - oldskool
//let - used when you will reasdign the value later in the code e.g. score for a game
//const - as the name alludes, it's a constant
let d;
d = 24;

console.log(d);

//Data types
// string, numbers, null, undefined, Boolean

const myName = 'WaDaniel';
const age = 22;
const x = null;
const z = undefined;
const isOpen = false;
let p;


console.log(typeof myName);
console.log(typeof age);
console.log(typeof x); //this lines ouputs that the type of null is "object" but it's a bogus answer hence false
console.log(typeof isOpen);

//concatenation
// Oldskool method
console.log('My Name is ' + myName + 'and I am turning ' + age);
//cool way to do it
const mienne = `My name is ${myName} and I am turning ${age} this year`;

console.log(mienne);
 