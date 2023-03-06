//Find 1st January be a Sunday between a range of years 2014 and 2050.


const startYear = 2014;
const endYear = 2050;

for (let year = startYear; year <= endYear; year++) {      //iterates over each year in this range using a for loop
  const date = new Date(year, 0, 1); // January is month 0 ,  1 is first day of the month
  if (date.getDay() === 0) {         // get day will return the day eg 0 is sunday, 1 is monday
    console.log(year);
  }
}
