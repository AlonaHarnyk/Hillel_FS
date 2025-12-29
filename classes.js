class Student {
  // public
  name;
  age;
  homeworkResults;

  //private
  #id;

  constructor({ name, age, homeworkResults = [] }) {
    this.name = name;
    this.age = age;
    this.homeworkResults = homeworkResults;
    this.#id = Student.generateId();
  }

  addHomeworkResult(result) {
    this.homeworkResults.push(result);
  }

  #showId() {
    console.log(`Student's id is ${this.#id}`);
  }

  showSecret() {
    this.#showId();
  }

  static counter = 0;

  static generateId() {
    return (Student.counter += 1);
  }

  get homeworksCount() {
    return this.homeworkResults.length;
  }

  set homeworksList(results) {
    if (Array.isArray(results)) {
      this.homeworkResults = results;
    } else {
      console.warn("Results must be an array");
    }
  }
}

// const student1 = new Student({ name: "John", age: 15 });
// const student2 = new Student({ age: 20, name: "Jack" });
// console.log(student1);
// console.log(student2);

// student1.addHomeworkResult({ html: 12 });
// student1.addHomeworkResult({ css: 10 });

// // console.log(student1.homeworkResults);

// console.log(student1.name);

// // console.log(student1.#id); // error

// student1.showSecret();

// console.log(student1.homeworksCount);

// student1.homew orksList = [{ js: 10 }];

// console.log(student1.homeworkResults);

class UniversityStudent extends Student {
  constructor({ name, age, homeworkResults, university }) {
    super({ name, age, homeworkResults });
    this.university = university;
  }

  test() {
    console.log("This is test!");
  }

  addHomeworkResult(result) {
    console.log("Extend method for test!");
    super.addHomeworkResult(result);
  }
}

const superStudent = new UniversityStudent({
  name: "Ann",
  age: 17,
  university: "Cambridge",
});

console.log(superStudent.addHomeworkResult({ ts: 10 }));

console.log(superStudent.homeworkResults);

console.log(superStudent.homeworksCount);

superStudent.test();
