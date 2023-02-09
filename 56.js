// class , prototype , object

const user = {
     firstname: "Alley",
     lastname: "gautam",
     email:"alleygautam308@gmail.com",
     age: 21,
     adress:"house number, colony , pincode , state",
     about: function(){
          return `${this.firstname} is ${this.age} years old`;

     },
     is18: function(){
          return this.age >= 18;
     }
}
const aboutuser= user.about();
console.log(aboutuser);

// function = that function create object
// add key value pair and object to return value
function createuser (firstname,lastname,email,adress,age){
     const user ={};
     user.firstname = firstname;
     user.lastname = lastname;
     user.email = email;
     user.age = age;
     user.adress = adress;
     user.about =function(){
          return `${this.firstname} is ${this.age} years old`;

     },
     user.is18= function(){
          return this.age <= 18;
     }
     return user;
}
const user1 = createuser('alley','gautam','alleygautam308@gmail.com',21,"my adress");
console.log(user1);
const is18 =user1.is18();
console.log(is18);