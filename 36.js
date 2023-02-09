// default parameters
function addtwo(a,b){
     if(typeof b==="undefined"){
          b = 1;
     }
    return a+b;
} 
const ans = addtwo(4);
console.log(ans);

// rest parameters
function myfunc(a,b,...c){
     console.log(`a is ${a}`)
     console.log(`b is ${b}`)
     console.log(`c is ${c}`)
}
myfunc(3,2,1,0,6,5,4);

// example
function addall(...numbers){
     console.log(numbers);
     console.log(Array.isArray(numbers));
}
addall(1,2,3,4,5,6,7,8,9);

//exaple
function digits(...numbers){
     let total = 0;
     for(let number of numbers){
        total = total + numbers;
     }
     return total;
}
const value= digits(3,2,5);
console.log(value);

