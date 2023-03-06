// create a variable type of string and try to add a number to it?

let a = 2;
let b = "nida";
console.log(a + b);   // it'll return a string

// use typeof operator to find out the type of string in last question?

console.log(typeof (a + b));  // if brackets not used it rturns datatype of only first element

// create a const object in js and can you later convert it into a number type?

const person = {
    name: "nida khan",
    learning: "javascript"
};
 
//  person = 50;                  // we cannot convert but we can add more properties
 person['marks']= 50;
 console.log(person);


 // 

const dictionary = { 
    rejuvenate : 'to make young again; restore to youthful vigor, appearance, etc.',
    germinant : 'beginning to grow or develop; germinating.',
    Accentuate : 'make more noticeable or prominent.',
    error : 'a mistake.'
}; 

console.log (dictionary);
console.log (dictionary.error);
console.log (dictionary['Accentuate']);         // ways to access 




