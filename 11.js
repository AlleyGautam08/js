//nested if else
// game =
//winning number 18
// 19 your guess is right ,17 too low , 20 too high

let winningnumber =18;
let userguess = +prompt("guess a number");
console.log(typeof userguess , userguess);

if(userguess === winningnumber){
     console.log("your guess is right!!");
}else{
     if(userguess < winningnumber){
          console.log("too low !!!");
     }else{
          console.log("too high!!!");
     }
}

