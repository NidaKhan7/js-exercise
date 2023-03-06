//Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.

function checkNumbers(num1, num2) {
   return (num1 === 50 || num2 === 50 || num1 + num2 === 50) 
  
  }

  console.log(checkNumbers(50, 10));
  console.log(checkNumbers(30, 10));
  console.log(checkNumbers(33, 50));
  console.log(checkNumbers(25, 25));


// OR we can use if else 

//   function checkNumbers(num1, num2) {
//     if (num1 === 50 || num2 === 50 || num1 + num2 === 50) {
//       return true;
//     } else {
//       return false;
//     }
//   }