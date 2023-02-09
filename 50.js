// maps 
// map is an iterable
// store data in odered fashion
// store key value pair (like object)
// duplicate keys are not allowed like objects
// difference between maps and object
// objects can only have string or symbol as key
// in map you can use anything as key 
// like array , number , string
// object literal = string and symbol
const person = {
     firstname :"alley",
     age: 21,
     1:"one"
}
//console.log(person.firstname);
//console.log(person["firstname"]);
console.log(person[1]);
for(let key in person){
     console.log(typeof key);
}

const person1 = new Map();
person1.set('name','cabby');
person1.set('age',21);
person1.set(1,'one');
console.log(person1);
console.log(person1.get(1));
//console.log(person1.keys());
for(let key of person1.keys()){
     console.log(key, typeof key);
}

// example
const person2 ={
     id:1,
     firstname1: "Alley"
}
const userInfo = new Map();
userInfo.set(person2,[age: 22, gender: "female"]);
console.log(userInfo);