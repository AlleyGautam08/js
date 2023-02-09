// block scope vs function scope
// let and const are block scope
// var is function scope

// example of block scope
{
     let firstname = "Alley";
     console.log(firstname);
}

{
     const firstname = "Cabby";
     console.log(firstname);
}

// example of function scope
{
     var firstname = "Kake"
}
console.log(firstname);

if(true){
     let firstname ="Burger";
     console.log(firstname);
}


function myapp(){
     if(true){
          var itsme ="Golgappa";
          console.log(itsme);
     }
     console.log(itsme);
}
myapp();