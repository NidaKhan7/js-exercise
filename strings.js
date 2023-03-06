//String Methods

let firstName = "nida";


console.log(firstName.toLowerCase());
console.log(firstName.toUpperCase());
console.log(firstName.slice(0,2));
console.log(firstName.split());

// let name = "alice";   //not working
// let newName = newName.replace ("alice","John");

// let text = "Please visit Microsoft and Microsoft!";
// let newText = text.replace("Microsoft", "W3Schools");


let str1 = "please pay a subscription of rs 200";
// let amount = str1.slice ("please pay a subscription of rs".length);
let amount = Number.parseInt(str1.slice(32));               // not working wrapping in Number.parseInt
console.log(amount);

console.log (typeof("amount"));

console.log ("har\"".length);