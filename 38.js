// callback function
function myfunc1(name){
     console.log("inside my func 1")
     console.log(`your name is ${name}`);
}

function myfunc(callback){
     console.log('hello there i am func');
     callback("Devraj");
}
myfunc(myfunc1);