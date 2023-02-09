// sort method
const numbers = [10,2000,900,369,8,7];
numbers.sort((a,b)=> a-b);
console.log(numbers);

//example
const product =[
     {productId:1 , productName:"p1",price:300},
     {productId:2 , productName:"p2",price:1300},
     {productId:3 , productName:"p3",price:200},
     {productId:4 , productName:"p4",price:3300},
     {productId:5 , productName:"p5",price:400},
]

const lowtohigh = product.slice(0).sort((a,b)=>{
     return a.price-b.price
});
console.log(lowtohigh);