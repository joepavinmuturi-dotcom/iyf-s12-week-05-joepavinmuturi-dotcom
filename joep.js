const check = (label, ok) => console.log(`${ok ? "✓" : "✗"} ${label}`);


const heading = document.querySelector("h1");
console.log(heading);

const contents = document.querySelectorAll(".content");
console.log(contents);

const form = document.getElementById("contact-form");
console.log(form);

const emailInput = document.querySelector("#contact-form input[type='email']");
console.log(emailInput);

const navItems = document.querySelectorAll("nav li");
console.log(navItems);

const firstNavLink = document.querySelector(".nav-link");
console.log(firstNavLink);

const lastParagraph = document.querySelector("article p:last-of-type");
console.log(lastParagraph);

const submitButton = document.querySelector("#contact-form button[type='submit']");
console.log(submitButton);

const headings = document.querySelectorAll("main h2");
console.log(headings);

const footer = document.querySelector("footer");
console.log(footer);

const missingElement = document.querySelector(".does-not-exist");
console.log(missingElement); 

const navTexts = [...navItems].map(item => item.textContent.trim());
console.log(navTexts);


const headerNav = document.querySelector("header").querySelector("nav");
console.log(headerNav);

const parentListItem = firstNavLink.parentElement;
console.log(parentListItem);

const article = document.querySelector("article");
const nextSection = article.nextElementSibling;
console.log(nextSection);


const navList = document.querySelector(".nav-list");
const childItems = navList.querySelectorAll(":scope > li");
console.log(childItems);


const body = footer.closest("body");
console.log(body);

const closestHeader = firstNavLink.closest("header");
console.log(closestHeader);


heading.textContent = "Mystical Programmers";

firstNavLink.href = "https://developer.mozilla.org";
firstNavLink.target = "_blank";
firstNavLink.rel = "noopener";

console.log("Article ID:", article.dataset.id);
console.log("Article category:", article.dataset.category);

article.dataset.status = "reviewed";

contents[0].classList.add("highlight");
contents[1].classList.toggle("accent");

const userInput = `<img src="x" onerror="alert('hacked!')">`;

document.getElementById("unsafe").innerHTML = userInput;
document.getElementById("safe").textContent = userInput;


function addNavItem(text, href) {
    const li = document.createElement("li");
    const link = document.createElement("a");

    link.classList.add("nav-link");
    link.href = href;
    link.textContent = text;

    li.appendChild(link);
    navList.appendChild(li);
}

addNavItem("Blog", "#blog");
addNavItem("Portfolio", "#portfolio");


const newParagraph = document.createElement("p");

newParagraph.textContent = "This paragraph was created using JavaScript.";

article.insertBefore(newParagraph, article.querySelector("p"));


const firstListItem = navList.querySelector("li");
const clonedItem = firstListItem.cloneNode(true);

clonedItem.querySelector(".nav-link").textContent = "Cloned";

navList.prepend(clonedItem);


footer.remove();


