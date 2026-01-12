function isAdult(age) {
  return age >= 18;
}

function getUser() {
  return { name: "Anna", age: 20 };
}

function throwError() {
  throw new Error("Boom!");
}

module.exports = { isAdult, getUser, throwError };
