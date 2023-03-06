/* Write a JavaScript program to display the current day and time in the following format.
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38 */


const today = new Date;
const day = today.getDay();
const daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
const cday = String(today.getTime());
let median = "";
let hour = "";
if (today.getHours()>=12 && today.getHours() <= 24 ) {
    median = "PM";
    hour = today.getHours() - 12;
 } else {
    median = "AM";
    
 }

console.log("Today is : " + daylist[day] + ".");
console.log (`Current time is : ${hour} ${median} : ${today.getMinutes()} : ${today.getSeconds()}`);

