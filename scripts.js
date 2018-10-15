
// This to grab the ID of the header
const headerEl = document.querySelector("#blog_header");

// This to access the content of the header

console.log(headerEl.innerHTML);


/*
    This code will only return the first section component
    even though there are three components with the same
    class
*/

// Ex#1
const sectionEl = document.querySelector(".article__section")

console.log(`sectionEl`, sectionEl);

// Ex#2

/*
    This code will only return the third section component
*/
const footerEl = document.querySelector(".article__footer")

console.log(`footer`, footerEl)

// Ex of adding and removing a class

/*
    Get reference to the section with the class of `smallText`
    and remove that class. Then add a new class of `largeText`
*/
const smallTextEl = document.querySelector(".smallText")
smallTextEl.classList.remove("smallText")
smallTextEl.classList.add("largeText")
