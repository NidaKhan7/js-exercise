//JavaScript function to get the day of the week

const today = new Date;
const day = today.getDay();
const daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
console.log("Today is : " + daylist[day] + ".");
