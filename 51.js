// clone using object.assignment
const obj = {
     key1: "value1",
     key2: "value2"
}
//const obj2 = ( ...obj);
const obj2 = Object.assign({},obj);
obj.key3 = "value3";
console.log(obj);
console.log(obj2);


// optioal chaining
const user = {
     firstname: "Alley",
     //address: {housenumber: '1234'}
     
}
console.log(user?.firstname);
console.log(user?.address?.housenumber);