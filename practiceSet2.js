// wap to find wether the number is divisible by 2 and 3
// use logical operators to determine if age of a person lies bet 10 and 20
// demonstrate use of switch case statements
// print 'you can drive' and 'you cannot drive' using ternary operators


// let num = 30;
function divisibleBy (num) {
if (num%2==0 && num%3==0) {
    return true;
// console.log('divisible by 2 and 3');
} else  { 
    return false;
    // console.log('not divisible by 2 and 3');
}
 }
console.log(divisibleBy(30));
console.log(divisibleBy(80));
console.log(divisibleBy(20));



// let b = prompt('Enter your age')

// if (b>=10 && b<=20){
//     console.log ("your age lies between 10 and 20");
// } else 
// {
// console.log ("your age does not lie between 10 and 20");

// }


let expr = 'fruits';
switch (expr) {
    case 'vegetables':
    console.log ('your cart has vegetables');
    break;

    case 'eggs':
    console.log ('your cart has eggs');
    break;

    case 'fruits':
    console.log ('your cart has fruits, vegetables and  eggs');
    break;

    default:
    console.log (`your cart has vegetables and eggs can you skip ${expr}`);

}
console.log("Is there anything else you'd like to add?");


let age = 20;
console.log ((age>15? "you can drive": "you cannot drive"));