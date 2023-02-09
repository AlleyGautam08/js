const obj1={
     key1: "value1",
     key2: "value2"
}

// _ _proto_ _
// offical ecmascript documentation
// [[prototype]]
// prototype






const obj2=Object.create(obj1);
//there is one more may to create  empty object
obj2.key3="value3";
//obj2.key2="unique";
console.log(obj2);
console.log(obj2.__proto__);
// this is happening



