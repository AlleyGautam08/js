const usermethodes = {
     about: function(){
     return `${this.firstname} is ${this.age} years old`;

   },
   is18: function(){
     return this.age <= 18;
  },
  sing: function(){
       return 'i love you';
  }
}
function createuser (firstname,lastname,email,adress,age){
     const user =Object.create(usermethodes);
     user.firstname = firstname;
     user.lastname = lastname;
     user.email = email;
     user.age = 21;
     user.adress = adress;
     
     return user;
}
const user1 = createuser('alley','gautam','alleygautam308@gmail.com',21,"my adress");
const user2 = createuser('alleyi','gautami','alleygautam308@gmail.com',21,"my adress");
const user3 = createuser('alleyd','gautamd','alleygautam308@gmail.com',21,"my adress");
console.log(user1);
console.log(user1.about());
console.log(user3.sing());
