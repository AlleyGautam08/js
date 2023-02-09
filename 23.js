// array destructuring
const myarray =["value1","value2","cabby","alley"];
//let myvar1 =myarray[0];
//let myvar2 =myarray[1];
//console.log("value of myvar1",myvar1);
//console.log("value of myvar2",myvar2);
let [myvar1,myvar2]=myarray;
//myvar1 ="value changed"
let mynewarray =myarray.slice(2);
console.log("value of myvar1",myvar1);
console.log("value of myvar2",myvar2);
console.log(mynewarray);
