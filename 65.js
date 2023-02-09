class Creatuser{
      constructor (firstname,lastname,email,adress,age){
           console.log("constructor called");
          const user =Object.create(createuser.prototype);
          user.firstname = firstname;
          user.lastname = lastname;
          user.email = email;
          user.age = 21;
          user.adress = adress;
     }
     about(){
          return `${this.firstname} is ${this.age} years old`;  
     }
     is18(){
          return this.age <= 18;
     }
     String(){
          return "la la la la la ";
     }
          
          
}
const user1 =new Createuser('alley','gautam','alleygautam308@gmail.com',21,"my adress");
const user2 =new Createuser('alleyi','gautami','alleygautam308@gmail.com',21,"my adress");
const user3 =new Createuser('alleyd','gautamd','alleygautam308@gmail.com',21,"my adress");