// map method
const numbers =[1,2,3,4];
//const square = function(numbers){
  //  return (Number*Number);
//}
//const squarenumber = numbers.map(function(Number){
    // return Number*Number;
//});
//console.log(squarenumber);

const users =[ 
     {firstname: "Alley", age: 21},
     {firstname: "cabby", age: 4},
     {firstname: "mithu", age: 05},
     {firstname: "mithi", age: 5},
]

const usernames= users.map((users) =>{
     return users.firstname;
});
console.log(usernames);