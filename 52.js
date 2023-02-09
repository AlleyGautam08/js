// method=
// function inside object
function personinfo(){
     console.log(`person name is ${this.firstname} and age is ${this.age}`);
}
const person1 = {
     firstname : "Alley",
     age: 21,
     about: personinfo
}
const person2 = {
     firstname : "cabby",
     age: 04,
     about: personinfo
}
const person3 = {
     firstname : "love",
     age: 05,
     about: personinfo
}
person1.about();
person2.about();
person3.about();
