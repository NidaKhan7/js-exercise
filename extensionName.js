//Get the extension of a filename

const filename = "displayDate.html"
console.log(filename.split('.').pop());

// using split function to split the filename into parts and pop to get the last part

const filename2 = "filename.extension"
console.log(filename2.split('.').pop());

// using slice

const filename1 = 'example.txt';

const dotIndex = filename1.lastIndexOf('.');  // Find the position of the last dot in the filename

const extension = filename1.slice(dotIndex + 1);  // extracts the rest of the string from that position to the end of the string
console.log(extension); 

// console.log (filename1.lastIndexOf('.'));