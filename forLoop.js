//Loops are handy, if you want to run the same code over and over again, each time with a different value.
// for (3 statements) { code to be executed }
// if we use var it'll 

for (let i = 0; i < 6; i++) {          // 3 statements ,s2 is condition

    console.log (i +1);                 // it'll terminate before 6 unless we add 1..so on

  }

  const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
  for (let i = 0; i < cars.length; i++) {
    console.log (cars[i]);
  }


let sum = 0;                        //if i is less than or equal to 100, and increments i by 1 after each iteration
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log("The sum is " + sum);   // After the loop finishes, 
  //it logs the total sum of all numbers from 1 to 100 to the console


// For in loop,  for (variable in array) {  code  } used to iterate over the array of an object
// iterate over the properties of an object

  const person = {
    name: "john",
    age: 30,
    occupation: "Engineer"
  };
  for (let property in person) {
    console.log(`${property}: ${person[property]}`);
  }

 //2
let students = {
    nida : 50,
    anna : 45,
    alice : 36,
    john : 43,
    sam : 39,

};
for (let property in students) {
    console.log(`${property}: ${students[property]}`);
}




// For Of loop,   for (variable of iterable) {...} works for objects such as arrays, strings, maps, sets.
// let b = nida;    no need 

for (let b of "nida")   // string
{
    console.log(b);
}


const myArray = [11, 22, 33, 44, 55];     // array
for (let element of myArray) {
    console.log(element);
  }
  
  const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  
  for (const x of fruits) {



    // code block to be executed
  }

  // while loop,     while (condition) {   // code block to be executed }


// let input = "";
// while (input !== "yes" && input !== "no") {
//   input = prompt("Please enter yes or no:");
// }
// console.log("You entered: " + input);

// while loop to validate user input. We prompt the user to enter either 
// "yes" or "no", and then we check whether the input matches one of those values. 


// example:
let i = 0;  
while (i < 10) {
    console.log (i +1);
    i ++;
}
// as long as the condition i < 10 is true it'll work 