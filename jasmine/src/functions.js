export function sum(a, b) {
  return a + b;
}

export function isAdult(age) {
  return age >= 18;
}

export function getUser() {
  return { name: "Anna", age: 20 };
}

export function throwError() {
  throw new Error("Boom!");
}

export const logger = {
  log(message) {
    console.log(message);
  },
};
