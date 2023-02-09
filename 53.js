// window object
function myfunc(){
     //console.log("hello  world");
     console.log(this);
}
window.myfunc();


//call method
function hello(){
     console.log("hye cabby");
}
hello.call();

// example
const user1 ={
     firstname: "Alley",
     age: 21,
     about: function(hobby, profession){
          console.log(this.firstname, this.age , hobby,profession)
     }
}
const user2 ={
     firstname: "cabby",
     age: 04,
}
//user1.about.call(user2, "dancing","web devloper");
//user1.about.apply(user2, ["dancing","web devloper"]);
const func=user1.about.bind(user1, "dancing","web devloper");
func();
