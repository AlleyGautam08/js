// hoisting
function hello() {
     console.log("hello world");
}
hello();

// function inside function
const app= ()=>{
     const myfun =() =>{
          console.log("hello from my fun");
     }
     myfun();
     console.log("inside app");
}
app();