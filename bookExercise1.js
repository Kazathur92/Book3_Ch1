// #1
// Use JavaScript to obtain a reference to the first section 
// with the class of article_header and change its text with 
// the textContent property to "Welcome to the {insert your name here}
//  blog"


document.querySelector(".article__header").textContent = "Welcome to the Alfonso Miranda blog";
 


// #2
// Use JavaScript to obtain a reference to all article__header 
// elements and change their classList property value to article__header
//  important.

const changeClass = document.querySelectorAll(".article__header");
// console.log(changeClass);
// changeClass[0].classList.replace("article__header", "article__header.important");
// console.log(changeClass)
// changeClass[1].classList.replace("article__header", "article__header.important");
// console.log(changeClass)

for (i = 0; i < changeClass.length; i++) {
changeClass[i].classList.add("important");
}


// #3
// Obtain a reference the element with a class of dashed and remove it.

const removeClass = document.querySelectorAll(".aside_box--dark");
for (i = 0; i < removeClass.length; i++) {
  removeClass[i].classList.remove("dashed");
  }

// #4
// Obtain a reference the element with a class of article_footer and add 
// the class of goldenrod it.

const anotherClass = document.querySelectorAll(".article__footer");
for (i = 0; i < anotherClass.length; i++) {
  anotherClass[i].classList.add("goldenrod");
  }
