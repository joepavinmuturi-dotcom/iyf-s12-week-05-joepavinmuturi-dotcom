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


const headerById = document.getElementById("main-header");
const byClass = document.getElementsByClassName("content");   
const byTag = document.getElementsByTagName("p");             
console.log("getElementById:", headerById);
console.log("getElementsByClassName:", byClass);
console.log("getElementsByTagName:", byTag);

const pageContainer = document.querySelector(".container");
pageContainer.style.backgroundColor = "#f0f0f0";
Object.assign(pageContainer.style, { padding: "30px", borderRadius: "8px" });

const countEl = document.getElementById("count");
let count = 0;
const showCount = () => (countEl.textContent = count);

document.getElementById("plus").addEventListener("click", () => {
    count++;
    showCount();
});
document.getElementById("minus").addEventListener("click", () => {
    if (count > 0) count--;           
    showCount();
});
document.getElementById("reset").addEventListener("click", () => {
    count = 0;
    showCount();
});

function handleClick() {
    console.log("Handled!");
}
const demoButton = document.getElementById("plus");
demoButton.addEventListener("click", handleClick);
demoButton.removeEventListener("click", handleClick);

document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("mouseenter", () => link.classList.add("highlight"));
    link.addEventListener("mouseleave", () => link.classList.remove("highlight"));
});

document.addEventListener("click", (event) => {
    console.log("Target:", event.target);
    console.log("Current target:", event.currentTarget);
    console.log("Type:", event.type);
    console.log("Position:", event.clientX, event.clientY);
});

document.addEventListener("keydown", (event) => {
    console.log("Key:", event.key, "Code:", event.code);

    if (event.ctrlKey && event.key.toLowerCase() === "s") {
        event.preventDefault();                 
        alert("Saved!");
    }
    if (event.key === "Escape") {
        form.querySelectorAll("input").forEach((i) => (i.value = ""));
    }
    if (event.ctrlKey && event.key === "Enter") {
        form.requestSubmit();
    }
});

document.getElementById("grandparent").addEventListener("click", () => console.log("Grandparent clicked"));
document.getElementById("parent").addEventListener("click", () => console.log("Parent clicked"));
document.getElementById("child").addEventListener("click", () => console.log("Child clicked"));

const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

taskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const text = taskInput.value.trim();
    if (text === "") return;

    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = text;                   
    const del = document.createElement("button");
    del.type = "button";
    del.className = "delete";
    del.textContent = "Delete";
    li.append(span, " ", del);
    taskList.appendChild(li);
    taskInput.value = "";
});

taskList.addEventListener("click", (event) => {
    const item = event.target.closest("li");
    if (!item) return;
    if (event.target.closest(".delete")) {
        item.remove();
    } else {
        item.classList.toggle("completed");
    }
});

const nameInput = document.getElementById("name");
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function showError(input, message) {
    input.classList.add("error");
    let msg = input.nextElementSibling;
    if (!msg || !msg.classList.contains("error-msg")) {
        msg = document.createElement("small");
        msg.className = "error-msg";
        input.after(msg);
    }
    msg.textContent = message;
}

function clearError(input) {
    input.classList.remove("error");
    const msg = input.nextElementSibling;
    if (msg && msg.classList.contains("error-msg")) msg.remove();
}

function isValid(data) {
    return data.name.trim().length >= 2 && emailPattern.test(data.email);
}

function showSuccess(message) {
    let status = document.getElementById("form-status");
    if (!status) {
        status = document.createElement("p");
        status.id = "form-status";
        status.setAttribute("role", "status");
        form.after(status);
    }
    status.textContent = message;
}

nameInput.addEventListener("input", (event) => {
    if (event.target.value.trim().length < 2) {
        showError(nameInput, "Name must be at least 2 characters");
    } else {
        clearError(nameInput);
    }
});

emailInput.addEventListener("input", (event) => {
    if (!emailPattern.test(event.target.value)) {
        showError(emailInput, "Please enter a valid email");
    } else {
        clearError(emailInput);
    }
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    console.log("Form data:", data);

    if (isValid(data)) {
        showSuccess("Form submitted successfully!");
        form.reset();
        clearError(nameInput);
        clearError(emailInput);
    } else {
        if (data.name.trim().length < 2) showError(nameInput, "Name must be at least 2 characters");
        if (!emailPattern.test(data.email)) showError(emailInput, "Please enter a valid email");
    }
});


