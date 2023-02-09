// reduce method
const numbers = [2,4,6,8,10];
// aim: sum of all the numbers in array

const sum= numbers.reduce((blockchain,frontend) =>{
   return blockchain + frontend;
});
console.log(sum);

const usercart = [
     {product:1,productname:"mobile",price:8000},
     {product:2,productname:"laptop",price:18000},
     {product:3,productname:"tv",price:28000},
]
const totalAmount= usercart.reduce((totalprice, currentproduct)=>{
     return totalprice +currentproduct.price;
},0)
console.log(totalAmount);