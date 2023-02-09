const user1 = {
     firstname: "Alley",
     age: 21,
     about: function(){
          console.log(this.firstname, this.age);
     }
}

//don't do this mistake
//user1.about();
const myfunc = user1.about.bind(user1);
myfunc();