import "./styles.css";

// EXAMPLES

// import imgSrc from "@/assets/image.png";

// import { a } from "@/scripts/script.js";

// console.log(a);

// const app = document.createElement("div");
// app.textContent = "Webpack працює 🚀";
// app.className = "title";
// document.body.append(app);

// const img = document.createElement("img");
// img.src = imgSrc;
// img.className = "image";
// app.appendChild(img);

import axios from "axios";

const api = axios.create({
  baseURL: "https://6240d2109b450ae274385b44.mockapi.io/api",
});

const fetchBtn = document.querySelector(".fetch");
const list = document.querySelector(".list");
const loader = document.querySelector(".loader");
const addBtn = document.querySelector(".add");
const formWrapper = document.querySelector(".form-wrapper");
const loreMoreBtn = document.querySelector(".load-more");
const searchForm = document.querySelector(".search-form");
const sortSelect = document.querySelector(".sort");

loader.style.display = "none";
addBtn.style.display = "none";
loreMoreBtn.style.display = "none";
searchForm.style.display = "none";
sortSelect.style.display = "none";

const BASE_URL = "https://6240d2109b450ae274385b44.mockapi.io/api";

fetchBtn.addEventListener("click", getUsers);

let currentPage = 1;
let search = "";
let sortOrder = "asc";

async function getUsers() {
  try {
    loreMoreBtn.style.display = "none";
    loader.style.display = "block";
    // const { data } = await api(`${BASE_URL}/users?page=1&limit=10`);
    const { data } = await api(`${BASE_URL}/users`, {
      params: {
        page: currentPage,
        limit: 5,
        search,
        sortBy: "name",
        order: sortOrder,
      },
    });
    const markup = data
      .map(
        ({ name, email, id }) =>
          `<li id=${id}><p>Name: <span class='name'>${name}</span></p><p>Email: <span class='email'>${email}</span></p>
        <button class='delete'>Delete</button><button class='edit'>Edit</button><div class="edit-form-wrapper"></div></li>`,
      )
      .join("");
    if (currentPage === 1) {
      list.innerHTML = "";
    }
    list.insertAdjacentHTML("beforeend", markup);
    const deleteBtns = list.querySelectorAll(".delete");
    deleteBtns.forEach((btn) => btn.addEventListener("click", deleteUser));
    fetchBtn.style.display = "none";
    addBtn.style.display = "inline";
    searchForm.style.display = "block";
    sortSelect.style.display = "block";

    if (data.length === 5) {
      loreMoreBtn.style.display = "inline";
    } else if (data.length < 5 && currentPage !== 1) {
      alert("The end of collection");
    }
    const editBtns = list.querySelectorAll(".edit");
    editBtns.forEach((btn) => btn.addEventListener("click", editUser));
  } catch (error) {
    console.log(error);
  } finally {
    loader.style.display = "none";
  }
}

async function deleteUser(e) {
  try {
    const id = e.target.parentNode.id;
    e.target.textContent = "Deleting";
    await api.delete(`${BASE_URL}/users/${id}`);
    currentPage = 1;
    list.innerHTML = "";
    getUsers();
  } catch (error) {
    console.log(error);
  }
}

addBtn.addEventListener("click", addUser);

function createFormMarkup(name = "", email = "") {
  return `<form><label>Name: <input type='text' name='name' value='${name}'/></label>
  <label>Email: <input type='email' name='email' value='${email}'/></label> <button class='save'>Save</button>
    </form>`;
}

function addUser() {
  formWrapper.innerHTML = createFormMarkup();
  const form = document.querySelector("form");
  const savBtn = document.querySelector(".save");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const userData = {
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
    };
    try {
      savBtn.textContent = "Saving...";
      await api.post(`${BASE_URL}/users`, userData);
      formWrapper.innerHTML = "";
      currentPage = 1;
      list.innerHTML = "";
      getUsers();
    } catch (error) {
      console.log(error);
    }
  });
}

function editUser(e) {
  const li = e.target.parentNode;
  const id = li.id;
  const editFormWrapper = li.querySelector(".edit-form-wrapper");
  const name = li.querySelector(".name").textContent;
  const email = li.querySelector(".email").textContent;
  editFormWrapper.innerHTML = createFormMarkup(name, email);
  const form = li.querySelector("form");
  const editBtn = e.target;
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const userData = {
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
    };
    try {
      editBtn.textContent = "Editing";
      await api.put(`${BASE_URL}/users/${id}`, userData);
      currentPage = 1;
      list.innerHTML = "";
      getUsers();
    } catch (error) {
      console.log(error);
    }
  });
}

loreMoreBtn.addEventListener("click", handleLoadMore);

function handleLoadMore() {
  currentPage += 1;
  getUsers();
}

searchForm.addEventListener("submit", searchHandler);

function searchHandler(e) {
  e.preventDefault();
  const form = e.target;
  search = form.elements.search.value.trim();
  currentPage = 1;
  getUsers();
  form.reset();
}

sortSelect.addEventListener("change", changeSortOrder);

function changeSortOrder(event) {
  sortOrder = event.target.value;
  list.innerHTML = "";
  currentPage = 1;
  getUsers();
}
