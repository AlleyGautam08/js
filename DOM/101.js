//document object model
// console.log(document);

// const mainheading = (document.getElementById("main-heading"));
// console.log(mainheading);



// const mainheading  = document.getElementById("main-heading");
// console.log(mainheading.textContent);
// mainheading.textContent = "this is something else";
// console.log(mainheading.textContent);

// change the style of elements
// const mainheading = document.querySelector("div.headlines h2");
// console.log(mainheading);
// mainheading,style.color = "blue";

// get and set attributes
const link =document.querySelector("a");
console.log(link.getAttribute("href"));
link.setAttribute("href","http://codprog.com");
console.log(link.getAttribute("href"));