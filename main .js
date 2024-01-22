
// assigning variables:
// var - oldskool
//let - used when you will reassign the value later in the code e.g. score for a game
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
 

//methods - function associated with an object - followed by brackets
const s = 'Hello World!'

console.log(s.length); //length
console.log(s.toUpperCase());
console.log(s.substring(1,8));

//for instance I want to extract tags then save them in a database
const y = 'react, vue, angular, node, native'

console.log(y.split(', ')) //prints the resulting split array

//arrays
//Creating an array 
// method 1
const numbers = new Array(1,2,3,4, 'ten', 'JavaScript');
console.log(numbers);

//method 2
const cars = ['Tesla', 'BMW', 'Mercedes', 'Porsche'];
console.log(cars);

//Adding an item to the array
//method 1
cars[4] = 'Toyota';
//method 2 - adds to the end of existing list
cars.push('Mazda');
//method 3 - adds to the beginning of existing list
cars.unshift('Land Rover');

//Remove the last item in the array
cars.pop();

//Checking if something is an array
console.log(Array.isArray(cars));

//Checking the index of an item in array
console.log(cars.indexOf('BMW'));


const person = {
    firstname: 'Lorem',
    lastname: 'Ipsum',
    age: 22,
    hobbies: ['coding', 'designing', 'hiking'],
    address: {
        county: 'Nyeri',
        state: 'Kenya'
    }
}

console.log(person.hobbies[1]);

//we can also use destructuring then create variables
const { firstname, lastname, address: {state}} = person;
console.log(state);
//You can also add properties
person.email = 'loremipsum@gmail.com';

console.log(person)

//object literals
//objects in an array
const todos = [
    {
        id: 1,
        text: 'Learn JavaScript',
        isComplete: true
    },
    {
        id: 2,
        text: 'Post on LinkedIn',
        isComplete: true
    },
    {
        id: 3,
        text: 'Design Dr. alin`s logo',
        isComplete: false
    } 
]

console.log(todos[1].text)

//converting the object literals into json say for example so as to send in a database
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

//for loop
for (let k=0; k<=10; k++) {
console.log(`The value of k is ${k}`);
}

//while loop
let m = 0;
while (m<=10) {
console.log(`While loop value is ${m}`)
m++;
}

//looping through arrays
//method 1
for (let b=0; b<todos.length; b++) {
    console.log(todos[b].text);
}

//method 2
for  (let todo of todos) {
    console.log(todo.id)
}

//method 3 - High order array methods:
//a) forEach

todos.forEach(function(todo) {
console.log(todo.text)
})

//b) map - returns an array
const todoText = todos.map(function(todo) {
    return todo.text;
})
console.log(todoText);

//c) filter 
const todoCompleted = todos.filter(function(todo) {
    return todo.isComplete === true;
})

console.log(todoCompleted);

//c) more (functional programming)
const todoIsCompleted = todos.filter(function(todo) {
    return todo.isComplete === true;
}).map(function(todo) {
    return todo.text;
})

console.log(todoIsCompleted)

//if statements
// double equals doesn't match the data type as compared to the tripple equals which does
const a = 9;

if ( a === 10 ) {
    console.log('a is 10')
} else if(a > 10) {
    console.log('a is greater than 10');
}else {
    console.log('a is less than 10')
}

// instead of using nested if statements, you can use or - reperesented by || or and - represeted by &&
const t = 5;
const u = 10;

if (t>4 && u <20) {
console.log('t is greater than 6 or u is less than 20')
}

//ternary operator
const r = 28;

const car = r>20 ? 'BMW' : 'Audi' // ? represents 'then' , : represents 'else' 

console.log(car);

//switch
 const q = 13;

const gari = q 

