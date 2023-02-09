function hello(){
     console.log("hello world");
}

// javascript function ===> function + object
console.log(hello.name);

// you can add your own properties

hello.myownproperty = "very unique value";
console.log(hello.myownproperty);

// function provides more usefull properties

// function give us free space ===>
// free space means prototype
// only functions provides prototype property

if(hello.prototype){
     console.log("prototype is present");
}else{
     console.log("prototype is note present");
}

hello.prototype.abcd = "abcd";
hello.prototype.xyz = "xyz";
hello.prototype.sing = function(){
     return "lalalla";
};
console.log(hello.prototype.sing());