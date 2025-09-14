//selects container div => #container
const container = document.querySelector("#container");

//selects the first sibling of container div => #display
const display = container.firstElementChild;

//selects controls div
const controls = document.querySelector(".controls");

// this selects the prior sibling => .display
const display2 = controls.previousElementSibling;
console.log(display2)


console.log(display)

          //Append elements
/*
-> parentNode.appendChild(childNode) - appends childNode as the last   child of parentNode.
-> parentNode.insertBefore(newNode, referenceNode) - inserts newNode into parentNode before referenceNode.
 */

          // Remove elements
/*
->parentnode.removeChild(child) - removes child from parentNode on the DOM nad returns a reference to a child.
 */

//creates a new div referenced in the variable "div"
const div = document.createElement("div");

          //Adding inline style

//adds styles to the element in the div variable
div.style.color = "blue";

//adds several style rules
div.style.cssText = "color: blue; background: green;"

//adds several style rules
div.setAttribute("style", "color: blue; background: green;");

//dot notation with camelCase accesses css property with two words
div.style.backgroundColor;

//bracket notation with kebab also works but not dot notation with kebab-case
div.style["background-color"];

//bracket notation with camelCase also works
div.style["backgroundColor"];

          //Editing attributes
// if id exists, update it to "theDiv", else creates id with the value "theDiv"
div.setAttribute("id", "theDiv");

//returns value of specified attribute
div.getAttribute("id");

//removes specified attribute
div.removeAttribute("id");

            //Working with classes

//adds class "new" to your new div
div.classList.add("new");

//removes "new" class from div
div.classList.remove("new");

//if div doesn't have class "active", then adds it, or if it does, then removes it.
div.classList.toggle("active");

            //Adding text content
div.textContent = "Hello World!";

            //Adding HTML content
div.innerHTML = "<span>Hello World!</span>"       


