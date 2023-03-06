// arithmetic operations
let a = 10 ;
let b = 2 ;
console.log( a + b);
console.log( a - b);
console.log( a / b);
console.log( a % b);   // remainder 0 

console.log( "++a = ", ++a  );    // 10 will become 11 +1
console.log( "a++ = ", a++  );    
console.log( "--a = ", --a  );    // it'll return 11 because we did a++ twice 
console.log( "a-- = ", a--  );    // it' return 11 and, a will become 10 
console.log( "a = ",  a  );    

// Assignment operators

let assignment = 2;
assignment +=5;              //  a = a + 5
console.log(assignment);

// Comparison operators

// let c1 = 6;
let c1 = "6";

let c2 = 7;

console.log(c1==c2);
console.log(c1!=c2);
console.log(c1===c2);  // it'll return false since 6 is a string type is not equal 
console.log(c1!==c2);

//Logical operators

let x = 6; 
let y = 8;

console.log(x>y && x==y);
console.log(x<y && y==y);
console.log(x>y || y==y);       // if one of the conditions is true then it'll return true

