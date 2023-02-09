// fill method
const myarray = new Array(10).fill(-1);
console.log(myarray);

const myarray1 = [1,2,3,4,5,6,7,8,9];
myarray1.fill(0,2,4);
console.log(myarray1);

// slice method
const myarray3 =['item1','item2','item3'];
myarray3.splice(1,1);
console.log(myarray3);

// insert
const myarray4 =['item1','item2','item3'];
myarray4.splice(1,0,'inserted item');
console.log(myarray4);

// insert and delete together
const myarray5 =['item1','item2','item3'];
myarray5.splice(1,2,'inserted item1','inserted item2');
console.log(myarray5);

