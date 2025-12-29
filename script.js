const body = document.body;

// console.log(body);

// const root = document.querySelector("#root");
// const root = document.getElementById("root");

// const divs = document.querySelectorAll("div");

// console.log(root.parentNode);

// // console.log(root.childNodes);

// console.log(root.children);

// console.log(root.firstElementChild);

// console.log(root.lastElementChild);

// console.log(root.previousElementSibling);

// console.log(root.nextElementSibling);

const input = document.querySelector("input");

// input.name = "query";

// input.value = "Test";

// const paragraph = document.querySelector(".text");
// paragraph.textContent = "Hello!";

// paragraph.classList.add("test");
// console.log(paragraph.classList.contains("text"));
// console.log(paragraph.classList.contains("item"));
// // paragraph.classList.remove("test");
// paragraph.classList.replace("test", "test1");
// paragraph.classList.toggle("test");

// root.style.backgroundColor = "teal";
// root.style.fontSize = "20px";
// root.style.display = "flex";

// const img = root.querySelector("img");

// console.log(img);

// console.log(img.hasAttribute("src"));
// console.log(img.getAttribute("alt"));

// console.log(img.alt);

// img.setAttribute("src", "img/test.png");
// // img.removeAttribute("src");
// console.log(img.attributes);

// const saveBtn = document.querySelector('[data-action="save"]');
// console.log(saveBtn);

// console.log(saveBtn.dataset.action);

// const title = document.createElement("h1");
// title.textContent = "Title";
// title.style.color = "orange";

// body.append(title);
// body.prepend(title);
// body.before(title);
// body.after(title);

// input.remove();

// const testDiv = document.querySelector(".test");

// console.log(testDiv.innerHTML);

// testDiv.innerHTML = "";

// testDiv.innerHTML = "<h2>Test title :)</h2>";

// testDiv.insertAdjacentHTML("afterbegin", "<p>123</p>");
// testDiv.insertAdjacentHTML("afterend", "<p>123</p>");
// testDiv.insertAdjacentHTML("beforebegin", "<p>123</p>");
// testDiv.insertAdjacentHTML("beforeend", "<p>123</p>");

const list = document.querySelector(".list");

const users = [
  { id: 1, name: "Ann", age: 16 },
  { id: 2, name: "Oleh", age: 35 },
  { id: 3, name: "Serg", age: 28 },
];

const markup = users
  .map(
    ({ id, name, age }) =>
      `<li id=${id}><h3>${name}</h3><p>${age}</p><button>Delete</button></li>`
  )
  .join("");

console.log(markup);

list.insertAdjacentHTML("afterbegin", markup);

// console.log(document.querySelectorl(".abc")); // null
