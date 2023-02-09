// new keyword
function creatuser(firstname, age){
     this.firstname=firstname;
     this.age=age;
}
creatuser.prototype.about = function(){
     console.log(this.firstname, this.age);
}
const user1 = new creatuser("Alley",21);
console.log(user1);


// new keyword == creat empty object, retrun