// I

// const clickBtn = document.querySelector(".click");

// console.log(clickBtn);

// clickBtn.addEventListener("click", () => {
//   console.log("Click!!!");
// });

// II

// const buttons = document.querySelectorAll(".list button");

// buttons.forEach((button) => {
//   button.addEventListener("click", (event) => {
//     console.log(event.target.textContent);
//   });
// });

// III

// const btn = document.querySelector(".one-time");

// const handler = () => {
//   console.log("One time!");
// };

// btn.addEventListener("click", handler);

// setTimeout(() => {
//   btn.removeEventListener("click", handler);
// }, 5000);!

// IV

// keydown
// keyup

// code
// key (depends on selected language)

// window.addEventListener("keydown", (event) => {
//   // console.log(event);
//   if (event.code === "Escape") {
//     console.log("Escape");
//   }

//   if (event.altKey && event.key === "Enter") {
//     console.log("Combination!");
//   }
// });

// V

// const form = document.querySelector("form");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const data = {
//     name: event.target.elements.name.value,
//     email: event.target.elements.email.value,
//   };

//   console.log(data);
// });

// VI

// const search = document.querySelector(".search");

// search.addEventListener("input", (e) => {
//   console.log(e.target.value);
// });

// search.addEventListener("focus", (e) => {
//   console.log("Focused!");
// });

// search.addEventListener("blur", (e) => {
//   console.log("Focused lost!");
// });

// search.addEventListener("change", (e) => {
//   console.log("Value changed!");
// });

// VII;

// const btnList = document.querySelector(".btn-list");

// btnList.addEventListener("click", (e) => {
//   // console.log(e.currentTarget);
//   if (e.target.nodeName === "BUTTON") {
//     console.log(e.target.textContent);
//   }
//   // console.log("Click!");
// });

// VIII

const inputForm = document.querySelector(".input-form");

inputForm.addEventListener("input", (e) => {
  // console.log(e.currentTarget.elements.name.value);
  // console.log(e.currentTarget.elements.email.value);
  const data = {
    name: e.currentTarget.elements.name.value,
    email: e.currentTarget.elements.email.value,
  };

  console.log(data);
});
