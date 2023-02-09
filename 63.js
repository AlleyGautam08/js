function createuser (firstname,lastname,email,adress,age){
     //const user =Object.create(createuser.prototype);
     this.firstname = firstname;
     this.lastname = lastname;
     this.email = email;
     this.age = 21;
     this.adress = adress;
     
     return this;
}
createuser.prototype.about= function(){
     return `${this.firstname} is ${this.age} years old`;  
};
createuser.prototype.is18=function(){
     return this.age <= 18;
};
createuser.prototype.sing=function(){
     return "la la la la la ";
}

const user1 =new createuser('alley','gautam','alleygautam308@gmail.com',21,"my adress");
const user2 =new createuser('alleyi','gautami','alleygautam308@gmail.com',21,"my adress");
const user3 =new createuser('alleyd','gautamd','alleygautam308@gmail.com',21,"my adress");
//console.log(user1);
//console.log(user3.sing());
for(let key in user1){
     console.log(key);
     
}
