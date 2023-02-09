// getters and setters

class person{
     constructor(firstname , lastname , age){
          this.firstname = firstname;
          this.lastname = lastname;
          this.age =age;
     }
     get fullname(){
          return `${this.firstname} ${this.lastname}`;
     }
     //setname(firstname,lastname){
       //   this.firstname = firstname;
         // this.lastname = lastname;
     //}
     set fullname(fullname){
         const [firstname,lastname]= fullname.split(" ");
         this.firstname = firstname;
         this.lastname = lastname;
     }
}

const person1 = new person("Alley" , "Gautam" ,21);
//console.log(person1.firstname);
//console.log(person1.lastname);
//person1.setname("cabby", "gautam");
//console.log(person1.firstname);
//console.log(person1.lastname);
person1.fullname = "cabby gautam";
console.log(person1);
console.log(person1.fullname);
