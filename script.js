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

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content";

container.appendChild(content);

const para = document.createElement("p");
para.style.color = "red";
para.textContent = "Hey, I'm red";
container.appendChild(para);

const h3 = document.createElement("h3");
h3.textContent = "I'm a blue H3";
h3.style.color = "blue";
container.appendChild(h3);

const myDiv = document.createElement("div");
myDiv.style["border: black; background-color: pink"];
container.appendChild(myDiv);

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";
myDiv.appendChild(h1);

const secondPara = document.createElement("p");
secondPara.textContent = "ME TOO";
myDiv.appendChild(secondPara);

const btn = document.querySelector("#btn");
console.log(btn)

btn.onclick = () => alert("Hello world");

const myBtn = document.querySelector("#myBtn");

myBtn.addEventListener("click", () => {
    alert("Hello world");
})

const anotherBtn = document.querySelector("#anotherBtn");

function consoleFunction () {
  console.log("Yay! You did it!")
}

anotherBtn.onclick = consoleFunction;

const anotherBtnStill = document.querySelector("#anotherBtnStill");

anotherBtnStill.addEventListener("click", function(e){
  e.target.style.background = "blue";
})

const buttons = document.querySelectorAll("button");

//we use forEach method to iterate through each button
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button.id);
  });
});

//To prevent the default behaviour of ana event, you use the preventDefault() method.
let link = document.querySelector("a");

link.addEventListener("click",function(e){
  //instead of the link taking you to the webpage it logs "clicked" in the console
  console.log("clicked");
  e.preventDefault()
});
