
// finding the average for multiple values

function onePlusAvg (a, b) {
    return 1+ ( a+b ) / 2; 
}
let a = 2;
let b = 3;
let c = 4;

console.log ("One plus average of a and b is " , onePlusAvg(a,b));
console.log ("One plus average of a and b is " , onePlusAvg(b, c));
console.log ("One plus average of a and b is " , onePlusAvg(c, a));



// program to add two numbers using a function

function add(n, p) {                // declaring a function
    console.log(n + p);
}
add(3,4);                           // calling functions
add(2,9);



// program to print the text  declaring a function
function greet(name) {
    console.log("Hello " + name + ":)");
}
let name = prompt("Enter a name: ");        // variable name can be different
greet(name);                                // calling function



// program to find the square of a number
let x = function (num) { return num * num };    // function is declared inside the variable
console.log(x(4));

let y = x(3);                                   // can be used as variable value for other variables
console.log(y);



//Get the difference between a given number
function difference(n)
 {
    if (n <= 13)
        return 13 - n;
    else
        return (n - 13) * 2;
 }
console.log(difference(32))
console.log(difference(11))
