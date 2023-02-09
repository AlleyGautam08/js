// filter method
const numbers =[1,2,3,4,5,6];
//const isEven= function(Number){
  //   return Number%2===0;
//}
const evennumber = numbers.filter((Number) =>{
     return Number % 2 === 0;
});
console.log(evennumber);