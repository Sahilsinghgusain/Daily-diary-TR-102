//String methods

let str = "Hello World . how are you , this is the javascript program";

let newStr  = "HELLO WORLD"; //array of characters
let str2 = "how are you";

console.log(str.length);
console.log(str.charAt(4));
console.log(str.substring(1 , 8));
console.log(str.replace('o' , 'g'));
console.log(str.indexOf('W'));
console.log(newStr.toLowerCase());
console.log(str2.toUpperCase());
console.log(str.includes(""));
console.log(str.split(" "))

let arr = [10 , 20 , 30 , 40];

console.log(arr.length);

console.log(arr);
arr.push(50);
arr.push(100);
arr.push(2411);
console.log(arr);

console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());

console.log(arr);

arr.unshift(150);
arr.unshift(250);
arr.unshift(350);

console.log(arr);
console.log(arr.shift());
console.log(arr.shift());

console.log(arr.indexOf(20));

const newArr = [50,60,10,204,45,12,500];

console.log(newArr);

console.log(newArr.slice(2 , 6));

console.log(newArr.join("/"));
console.log(newArr.join("/").length);


let a = Math.PI;

console.log(a);
console.log(Math.LN10);
console.log(Math.LN2);
console.log(Math.SQRT1_2);
console.log(Math.E);
console.log(Math.LOG2E);
console.log(Math.sin(30))

console.log(Math.min(10,20,40,50,5,6,0,1,-5));
console.log(Math.max(10,20,40,50,5,6,0,1,-5));

console.log(Math.abs(-45.7156));

console.log(Math.round(5.4));

console.log(Math.floor(2.1111));

console.log(Math.floor(Math.random() * 9999));