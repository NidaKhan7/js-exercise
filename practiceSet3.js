// wap to print marks of student object using for loop
// obj = { nida : 98 , ...}
// write above program in for in loop
// wap to print "try again" until user puts correct value
// write a function to find mean of 5 numbers 

let marks = {
    nida : 100,
    alice : 97,
    john : 98,
}
for (let i = 0; i < Object.keys(marks).length; i++) {
    console.log("marks of  " + Object.keys(marks)[i] + "" +  "are"  + "" + marks[Object.keys(marks)[i]]);
};

for (let i in marks) { 
    console.log("the marks of" + i + " are" + marks[i]);
}

// let x = 5;
// let y ;
// while (y != x)
// {
//     y =  prompt  ("Enter a number");
//     console.log("try again" );
// }
// console.log("number is correctly entered");



/*for mean , Add up all the numbers in the array.
Divide the sum by the number of elements in the array.*/


