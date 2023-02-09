// function
//console.log("happy birthday to you .....");

function alleycabbybirthday(){
     console.log("I LOve You ...");
}
alleycabbybirthday();


function sumtwonumbers(number1,number2){
     return number1 + number2;
}
//const returnedvalue = sumtwonumbers(4,5);
//console.log(returnedvalue);

// odd or even
// input : 1 number
// output : true , false



// emaple
function firstchar(anystring) {
     return anystring[0];
}
console.log(firstchar("abc"));

// example
function findtarget(array , target) {
     for(let i =0; i<array.length; i++){
          if(array[i] === target){
             return i;
          }
     }
     return -1;
}
const myarray = [1,22,33,55]
const ans = findtarget(myarray, 33);
console.log(ans);