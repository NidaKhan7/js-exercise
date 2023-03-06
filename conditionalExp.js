// if, if else, else if else,nested and prompt alert  
  //  if (condition) {block of code to be executed if the condition is true }


let a = prompt ('20');
a = Number.parseInt(a);     // parseInt converts string value to integer 

if (a>0) {                  // if contains condition
    alert ("this is a valid number");
}

// nested condition

let age = prompt ('whats your age?');
if (age > 0 && age < 15) {

    alert ("you can not drive");
}
else if (age >15 && age <=18 ) {
    alert ("you can drive under guidance");
}
else  ( age > 18 )
{
    alert ("you can drive!");
}
console.log ("done");

// Ternary condition - (condition)? 'expression1': 'expression2'
let marks = 20;
console.log ("you", (marks>10? "pass": "fail"));



// Switch statement evaluates an expression, matching the expression's value against a series of case
/* switch (expression) {
  case value1:
    //Statements executed when the result of expression matches value1 (console log)
    [break;]
  case value2:
    //Statements executed when the result of expression matches value2 (console log)
    [break;]
  ...
  case valueN:
    //Statements executed when the result of expression matches valueN (console log)
    [break;]
  [default:
    //Statements executed when none of the values match the value of the expression (no case direct console log)
    [break;]]
} */


const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;                      // will stop the execution inside the switch block.
  case 'Mangoes':
  case 'Papayas':               // it'll take this case as it matches the expression
    console.log('Mangoes and papayas are $2.79 a pound.');
    break;

  default:
    console.log(`Sorry, we are out of ${expr}.`);   
}
console.log("Is there anything else you'd like?");




switch (new Date().getDay()) {   // date object and and get day method 
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }                                 // op Friday 

  // prompt 
let b = prompt ("hey");