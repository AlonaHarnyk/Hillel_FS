const students = [
  {
    id: "c1f3a1d2-91e2-4a5f-8b39-12ba4c0e1120",
    name: "Mark Spencer",
    age: 20,
    email: "mark.spencer@university.edu",
    faculty: "Computer Science",
    isActive: true,
    courses: ["Algorithms", "Math", "Databases"],
    averageGrade: 3.6,
    hobbies: ["gaming", "reading"],
    livesInDorm: false,
    balance: 320.5,
  },
  {
    id: "a9e21c72-67b4-49fa-8d11-44d0d9a5e9a2",
    name: "Anna Kovalenko",
    age: 19,
    email: "anna.kovalenko@university.edu",
    faculty: "History",
    isActive: true,
    courses: ["English Literature", "Psychology"],
    averageGrade: 4.2,
    hobbies: ["reading", "yoga", "painting"],
    livesInDorm: true,
    balance: 150.0,
  },
  {
    id: "f23be9d7-4b11-4af0-9de8-cbaa01f4cfe1",
    name: "Nikita Orlov",
    age: 22,
    email: "nikita.orlov@university.edu",
    faculty: "Mechanical Engineering",
    isActive: false,
    courses: ["Thermodynamics", "Mechanics", "Physics"],
    averageGrade: 3.1,
    hobbies: ["cars", "gym"],
    livesInDorm: true,
    balance: 80.75,
  },
  {
    id: "d43fbc19-15d5-42b0-ad77-2f22e9559731",
    name: "Sophia Müller",
    age: 21,
    email: "sophia.muller@university.edu",
    faculty: "History",
    isActive: true,
    courses: ["Design Basics", "3D Modeling", "Art History"],
    averageGrade: 4.0,
    hobbies: ["sketching", "photography", "traveling"],
    livesInDorm: false,
    balance: 410.0,
  },
  {
    id: "e8b7c720-9c32-4e96-bf2d-e24bd2daaa45",
    name: "Liam Johnson",
    age: 22,
    email: "liam.johnson@university.edu",
    faculty: "Computer Science",
    isActive: false,
    courses: ["Marketing", "Finance", "Management"],
    averageGrade: 3.4,
    hobbies: ["gym", "chess"],
    livesInDorm: false,
    balance: 95.2,
  },
  {
    id: "9e73cc24-31fc-47d8-bb3d-b7dc0b8c5ea9",
    name: "Emily Carter",
    age: 20,
    email: "emily.carter@university.edu",
    faculty: "Biology",
    isActive: true,
    courses: ["Genetics", "Chemistry", "Ecology"],
    averageGrade: 4.5,
    hobbies: ["hiking", "photography", "reading"],
    livesInDorm: true,
    balance: 520.0,
  },
  {
    id: "b71e4f52-7d0a-4b05-9e16-9542e0b73adb",
    name: "Taras Melnyk",
    age: 22,
    email: "taras.melnyk@university.edu",
    faculty: "Computer Science",
    isActive: false,
    courses: ["Modern History", "Sociology"],
    averageGrade: 3.2,
    hobbies: ["books", "violin", "reading"],
    livesInDorm: false,
    balance: 60.0,
  },
];

// every;

// const result1 = students.every(({ age }) => age > 20); // false
// console.log(result1);

// some
// const result2 = students.some(({ age }) => age > 20); // true
// console.log(result2);

// toSorted

// const nums = [26, 40, 59, 36, 10];

// console.log(nums.toSorted());

// const nums1 = [26, 3, 40, 59, 5, 36, 4, 10, 1];

// console.log(nums1.toSorted());

// console.log(nums1.toSorted((a, b) => a - b)); // 1 -> 100

// console.log(nums1.toSorted((a, b) => b - a)); // 100 -> 1

// const letters = [
//   "apple",
//   "cake",
//   "potato",
//   "tomato",
//   "cucumber",
//   "banana",
//   "cabbage",
// ];

// console.log(letters.toSorted());

// const letters1 = [
//   "apple",
//   "cake",
//   "Potato",
//   "tomato",
//   "Cucumber",
//   "banana",
//   "Cabbage",
// ];

// console.log(letters1.toSorted());

// console.log(letters1.toSorted((a, b) => a.localeCompare(b))); // a -> z
// console.log(letters1.toSorted((a, b) => b.localeCompare(a))); // z -> a

// console.log(students.toSorted((a, b) => a.age - b.age));
// console.log(students.toSorted((a, b) => a.name.localeCompare(b.name)));

// reduce

// const numbers = [2, 6, 3, 8, 30, 34, 25];

// const sum = numbers.reduce((acc, item, idx) => {
//   console.log(`Iteration # ${idx + 1}`);
//   console.log("acc", acc);
//   const res = acc + item;
//   console.log("res", res);
//   return res;
// }, 0);

// console.log(sum);

// const filteredStudents = students.filter((item) => item.isActive);
// const names = filteredStudents.map((item) => item.name);
// // const sortedNames = names.toSorted((a, b) => a.localeCompare(b));

// const sortedNames = students
//   .filter((item) => item.isActive)
//   .map((item) => item.name)
//   .toSorted((a, b) => a.localeCompare(b));

// console.log(sortedNames);

// const activeStudents = students.reduce((acc, item) => {
//   if (item.isActive) {
//     acc.push(item.name);
//   }
//   return acc;
// }, []);

// console.log(activeStudents);

// const grouppedStudents = students.reduce(
//   (acc, item) => {
//     if (item.livesInDorm) {
//       acc.dorm.push(item.name);
//     } else {
//       acc.notDorm.push(item.name);
//     }
//     return acc;
//   },
//   {
//     dorm: [],
//     notDorm: [],
//   }
// );

// console.log(grouppedStudents);

// const grouppedByFaculty = students.reduce((acc, item) => {
//   if (!acc[item.faculty]) {
//     acc[item.faculty] = [];
//   }

//   acc[item.faculty].push(item);

//   return acc;
// }, {});

// console.log(grouppedByFaculty);

// const hobbies = students.flatMap((item) => item.hobbies);
// const uniqueHobbies = hobbies.filter((item, idx) => {
//   console.log(`Iteration # ${idx + 1}`);
//   console.log(item);
//   console.log(hobbies.indexOf(item));
//   console.log(idx);
//   return hobbies.indexOf(item) === idx;
// });
// console.log(uniqueHobbies);
