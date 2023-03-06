/* Write a JavaScript function to check whether an 'input' is a date object or not.

Test Data:
console.log(is_date("October 13, 2014 11:13:00"));
console.log(is_date(new Date(86400000)));
console.log(is_date(new Date(99,5,24,11,33,30,0)));
console.log(is_date([1, 2, 4, 0]));
*/

function isDate(input) {
    return input instanceof Date;  // using instanceof Date to check whether it's a date object
  }

console.log(isDate("October 13, 2014 11:13:00"));       // this is a string ""
console.log(isDate(new Date(86400000)));                
console.log(isDate(new Date(99,5,24,11,33,30,0)));
console.log(isDate([1, 2, 4, 0]));                      // this is an array []