class animal{
     constructor(name,age){
          this.name = name;
          this.age = age;
     }
     eat(){
          return `${this.name }is eating`;
     }
     isSupercute(){
          return this.age <= 1;
     }
     isCute(){
          return true;
     }
}
//const Animal =new animal('cabby',4);
//console.log(Animal);
//console.log(Animal.eat());
//console.log(Animal.isCute());
//console.log(Animal.isSupercute());

class dog extends animal{
     constructor(name,age,speed){
          super(name,age);
          this.speed = speed;
     }
     eat(){
          return `modified eat : ${this.name } is eating`
     }
     run(){
          return `${this.name} is running at ${this.speed}kmph`;
     }
}
const rabbit = new dog('cabby',4,45);
console.log(rabbit.run());
console.log(rabbit.eat());
