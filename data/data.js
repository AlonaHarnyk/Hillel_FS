function sum(a, b) {
  return a + b;
}

function isAdult(age) {
  return age >= 18;
}

function getUser() {
  return { name: "Anna", age: 20 };
}

function throwError() {
  throw new Error("Boom!");
}

const logger = {
  log(message) {
    console.log(message);
  },
};
