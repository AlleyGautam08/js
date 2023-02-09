// lexical scope
function myapp(){
     const myvar = "value1"
     function myfunc(){
          const myvar ="value2";
          console.log("inside myfunc",myvar);
     }
     myfunc();
     const myfunc2 = function(){
          console.log("cabby");
     }
     myfunc2();
     const myfunc3 = () => {
          console.log("mithii-love....")
     }
     myfunc3();
     console.log(myvar);
}
myapp();