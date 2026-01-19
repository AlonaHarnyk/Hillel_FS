const fetchBtn = document.querySelector(".fetch");
const list = document.querySelector(".list");
const loader = document.querySelector(".loader");
const addBtn = document.querySelector(".add");
const formWrapper = document.querySelector(".form-wrapper");

loader.style.display = "none";
addBtn.style.display = "none";

const BASE_URL = "https://6240d2109b450ae274385b44.mockapi.io/api";

fetchBtn.addEventListener("click", getUsers);

function getUsers() {
  list.innerHTML = "";
  loader.style.display = "block";
  fetch(`${BASE_URL}/users`)
    .then((response) => response.json())
    .then((data) => {
      const markup = data
        .map(
          ({ name, email, id }) =>
            `<li id=${id}><p>Name: ${name}</p><p>Email: ${email}</p><button class='delete'>Delete</button></li>`,
        )
        .join("");
      //   list.innerHTML = "";
      //   list.insertAdjacentHTML("afterbegin", markup);
      list.innerHTML = markup;
      const deleteBtns = list.querySelectorAll(".delete");
      deleteBtns.forEach((btn) => btn.addEventListener("click", deleteUser));
      fetchBtn.style.display = "none";
      addBtn.style.display = "inline";
    })
    .catch((error) => console.log(error))
    .finally(() => {
      loader.style.display = "none";
    });
}

function deleteUser(e) {
  const id = e.target.parentNode.id;
  const options = {
    method: "DELETE",
  };
  e.target.textContent = "Deleting";
  fetch(`${BASE_URL}/users/${id}`, options)
    .then(() => getUsers())
    .catch((error) => console.log(error));
}

addBtn.addEventListener("click", addUser);

function createFormMarkup() {
  return `<form><label>Name: <input type='text' name='name'/></label>
  <label>Email: <input type='email' name='email'/></label> <button class='save'>Save</button>
    </form>`;
}

function addUser() {
  formWrapper.innerHTML = createFormMarkup();
  const form = document.querySelector("form");
  const savBtn = document.querySelector(".save");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const userData = {
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
    };

    const options = {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json; charset = UTF-8",
      },
    };

    savBtn.textContent = "Saving...";
    fetch(`${BASE_URL}/users`, options)
      .then(() => {
        formWrapper.innerHTML = "";
        getUsers();
      })
      .catch((error) => console.log(error));
  });
}
