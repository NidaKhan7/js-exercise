//JavaScript program that gets the difference between a given number and 13,
// and returns double the absolute difference if the number is greater than 13.

function getDifference(number) {
    const diff = Math.abs(number - 13);   // difference means substract abs for positive value
  
    if (number > 13) {
      return diff * 2;
    } else {
      return diff;
    }
  }
  
  console.log(getDifference(7));  
  console.log(getDifference(13)); // Output: 0
  console.log(getDifference(20));
  