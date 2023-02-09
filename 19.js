// primitive vs reference data type
let num1= 6;
let num2= num1;
console.log("value is num1 is",num1);
console.log("value is num2 is",num2);
num1++;
console.log("value is num1 is",num1);
console.log("value is num2 is",num2);


let array1 =["item1" , "item2"];
let array2 =array1;
console.log("array1" , array1);
console.log("array2" , array2);
array1.push("item3");
console.log("array1" ,array1);
console.log("array2" ,array2);
