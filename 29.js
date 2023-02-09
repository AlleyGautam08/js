// objects inside array
// very useful in real world application

//const users =[
  //   {userid:1,firstname:'alley',gender:'female'},
    // {userid:2,firstname:'cabby',gender:'male'},
     //{userid:3,firstname:'mithi',gender:'female'},
//]
//for(let user of users){
  //   console.log(user.userid);
//}

//nested destructuring
const users =[
     {userid:1,firstname:'alley',gender:'female'},
     {userid:2,firstname:'cabby',gender:'male'},
     {userid:3,firstname:'mithi',gender:'female'},
]
const [{firstname}, , {gender}] =users;
console.log(firstname,gender);