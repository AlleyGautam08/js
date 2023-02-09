// arrow function
const user1 = {
     firstname: "Alley",
     age: 21,
     about: () => {
          console.log(this.firstname, this.age);
     }
}
user1.about();


