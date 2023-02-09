// some method
const numbers =[3,2,8];
const ans = numbers.some((Number)=>{
     return numbers.Number%2===0
});
console.log(ans);

//example
const usercart = [
     {product:1,productname:"mobile",price:8000},
     {product:2,productname:"laptop",price:18000},
     {product:3,productname:"tv",price:28000},
]
const bill=usercart.some((cartitem)=>cartitem.price<10000)
console.log(bill);