const sum = require("../src/sum.js");
const logger = require("../src/logger.js");
const { isAdult, getUser, throwError } = require("../src/utils.js");

describe("Навчальний приклад Jest", () => {
  let value;

  // beforeAll — виконується перед ВСІМА тестами
  beforeAll(() => {
    console.log("Start!");
  });

  // afterAll — виконується ПІСЛЯ ВСІХ тестів
  afterAll(() => {
    console.log("End");
  });

  //   beforeEach — виконується перед КОЖНИМ тестом
  beforeEach(() => {
    console.log("before each");
    value = 10;
  });

  // afterEach — виконується ПІСЛЯ КОЖНОГО тесту
  afterEach(() => {
    console.log("after each");
    value = null;
  });

  // toBe
  test("sum додає два числа (toBe)", () => {
    expect(sum(2, 3)).toBe(5);
  });

  // toEqual
  test("getUser повертає обʼєкт (toEqual)", () => {
    expect(getUser()).toEqual({ name: "Anna", age: 20 });
  });

  // toBeTruthy
  test("isAdult повертає true для дорослого (toBeTruthy)", () => {
    expect(isAdult(20)).toBeTruthy();
  });

  // toBeFalsy
  test("isAdult повертає false для неповнолітнього (toBeFalsy)", () => {
    expect(isAdult(15)).toBeFalsy();
  });

  // toContain (рядок)
  test("рядок містить підрядок (toContain)", () => {
    expect("Hello world").toContain("world");
  });

  // toContain (масив)
  test("масив містить елемент (toContain)", () => {
    expect([1, 2, 3]).toContain(2);
  });

  // toThrow
  test("функція кидає помилку (toThrow)", () => {
    expect(() => throwError()).toThrow();
  });

  //   // beforeEach / afterEach використання
  test("value ініціалізується в beforeEach", () => {
    expect(value).toBe(10);
  });

  // jest.spyOn
  test("jest.spyOn відстежує виклик методу", () => {
    const spy = jest.spyOn(logger, "log");
    logger.log("Test message");
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith("Test message");
  });

  // jest.fn()
  test("jest.fn() створює порожній spy", () => {
    const mySpy = jest.fn();
    mySpy("hello");
    expect(mySpy).toHaveBeenCalled();
    expect(mySpy).toHaveBeenCalledWith("hello");
  });

  // analog jasmine.createSpyObj
  test("jest.fn() створює обʼєкт зі spy", () => {
    const api = {
      get: jest.fn(),
      save: jest.fn(),
    };

    api.get();
    api.save();
    expect(api.get).toHaveBeenCalled();
    expect(api.save).toHaveBeenCalled();
  });
});
