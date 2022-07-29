// define objects
let obj = {} // first way
let obj1 = new Object() // second way

// assigning values in objects
obj = {
    name: 'Aman'
}
obj1.name = 'Raju';
obj1['age'] = 25;

// out of the box
console.log('window', window)
console.log('this', this)
console.log(window === this)

// when we initailize a value or function it goes to global scope that is goes to window object
var a = 'aman'

function b() {
    console.log('my name is raju also!')
}

// global excution context
console.log(a)
// functional excution context
b();

//  excution stack 
var color = "red";

function chengeColor() {
    var color = "green";
    console.log(`change color is ${color}`)
}
chengeColor();
console.log(`initail color is ${color}`)