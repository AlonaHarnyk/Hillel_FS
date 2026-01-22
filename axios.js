// axios.baseUrl = "https://6240d2109b450ae274385b44.mockapi.io/api";

const api = axios.create({
  baseURL: "https://6240d2109b450ae274385b44.mockapi.io/api",
});

const fetchBtn = document.querySelector(".fetch");
const list = document.querySelector(".list");
const loader = document.querySelector(".loader");
const addBtn = document.querySelector(".add");
const formWrapper = document.querySelector(".form-wrapper");

loader.style.display = "none";
addBtn.style.display = "none";

const BASE_URL = "https://6240d2109b450ae274385b44.mockapi.io/api";

fetchBtn.addEventListener("click", getUsers);

async function getUsers() {
  try {
    list.innerHTML = "";
    loader.style.display = "block";
    const { data } = await api(`${BASE_URL}/users`);
    const markup = data
      .map(
        ({ name, email, id }) =>
          `<li id=${id}><p>Name: <span class='name'>${name}</span></p><p>Email: <span class='email'>${email}</span></p>
        <button class='delete'>Delete</button><button class='edit'>Edit</button><div class="edit-form-wrapper"></div></li>`,
      )
      .join("");
    //   list.innerHTML = "";
    //   list.insertAdjacentHTML("afterbegin", markup);
    list.innerHTML = markup;
    const deleteBtns = list.querySelectorAll(".delete");
    deleteBtns.forEach((btn) => btn.addEventListener("click", deleteUser));
    fetchBtn.style.display = "none";
    addBtn.style.display = "inline";
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
      getUsers();
    } catch (error) {
      console.log(error);
    }
  });
}
