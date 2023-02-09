// sets(it is iterable)
// store data and sets also have its own methods
// no index-based access 
// order is not guaranteed
// unique items only ( no duplicates allowed)

//const numbers = new Set([1,2,3]);
//console.log(numbers);

// example
const items = ['item1','item2','item3'];
const numbers1 = new Set();
numbers1.add(2);
numbers1.add(4);
numbers1.add(6);
numbers1.add(8);
numbers1.add(10);
numbers1.add('items');
//if(numbers1.has(2)){
   //  console.log("1 is present");
//}else{
    // console.log("1 is not present");
//}
//console.log(numbers1);
for(let number of numbers1){
     console.log(number);
}

//example
const myarray = [1,2,2,3,3,4,4,5,5,6];
const uniqueElements = new Set(myarray);
let length = 0;
for(let elements of uniqueElements){
     length++;
}
console.log(uniqueElements);
console.log(length);                                        

