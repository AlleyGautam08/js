// find method
const myarray = ["hello","cat","dog","lion"];
function isLength3(string){
     return string.length === 3;
}
const answer = myarray.find(isLength3);

const ans = isLength3("dog");
console.log(ans,answer);

// example
const users =[
     {userid:1,name:"aaaa",age:19},
     {userid:2,name:"bbbb",age:12},
     {userid:3,name:"cccc",age:13},
     {userid:4,name:"dddd",age:18},
     {userid:5,name:"eeee",age:17},
];
const web = users.find((users)=>{
      return users.userid===3
});
console.log(web);

// every method
const digit =[3,5,7,9];
const divid = digit.every((digits)=>{
     return digit.digits%2===0
});
console.log(divid); 


//example
const usercart = [
     {product:1,productname:"mobile",price:8000},
     {product:2,productname:"laptop",price:18000},
     {product:3,productname:"tv",price:28000},
]
const shopping = usercart.every((bill)=>{
     return usercart.price  < 30000
});
console.log(shopping);