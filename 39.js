// function returning function
function myfunc(){
     function hlo(){
          //console.log("cabby-alley")
          return "cabby-alley"
     }
     return hlo;
}
const ans = myfunc();
console.log(ans());
//ans();