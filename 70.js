// static methods and properties
class person{
     constructor(firstname , lastname , age){
          this.firstname = firstname;
          this.lastname = lastname;
          this.age =age;
     }
     static classInfo(){
          return `this is person class`;
     }
     get fullname(){
          return `${this.firstname} ${this.lastname}`;
     }
     
     set fullname(fullname){
         const [firstname,lastname]= fullname.split(" ");
         this.firstname = firstname;
         this.lastname = lastname;
     }
     eat(){
          return `${this.firstname } is eating`;
     }
     isSupercute(){
          return this.age <= 1;
     }
     isCute(){
          return true;
     }
}
const person1 = new person("Alley", "gautam" ,21);
console.log(person1.eat());
const ans = person.classInfo();

console.log(ans);