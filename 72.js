// closures
// function can return functions



function outerfunction(){
     function innerfunction(){
          console.log("hello world")
     }
     return innerfunction;
}
const ans = outerfunction();
ans();



function printfullname(firstname, lastname){
     function printname(){
          console.log(firstname, lastname);
     }
     return printname;
}
const ans1 = printfullname("alley","gautam");
ans1();