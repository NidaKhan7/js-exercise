
//Write a JavaScript program to get the current date Pass a separator as an argument.

const currentDate = new Date;
const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1); //As January is 0.
const day = String(currentDate.getDate());
const dateFormat = `${year}/${month}/${day}`

const separator = '-'; // separator between date

const formattedDate = `${year}${separator}${month}${separator}${day}`;
console.log(formattedDate);

