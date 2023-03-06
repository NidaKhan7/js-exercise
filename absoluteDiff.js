//Compute the absolute difference between a specified number and 19

function absoluteDiff(a) {
    if (a <= 19) {
      return (19 - a);
      }
    else
      {
       return (a - 19) * 3;
      }
  }
  
  console.log(absoluteDiff(12));
  console.log(absoluteDiff(2));
  console.log(absoluteDiff(19));

  
//Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.

function checkInteger (x) {

return (Math.abs(100 - x) <= 20) || (Math.abs(400 - x) <= 20);        // 100 minus given integer 

}
console.log (checkInteger(10));
console.log (checkInteger(100));
console.log (checkInteger(19));