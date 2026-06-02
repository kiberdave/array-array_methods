const students = ["Sandro", "Mariam", "Dato"];

// console.log(students.length);

// students.forEach(name=>console.log(name))

students.push("Luka");
students.unshift("Nia")
console.log(students)

// ------------- 2

const colors = ["Black", "Red", "Green", "Blue", "White"];

colors.shift()
colors.pop()
console.log(colors)

// ------------ 3

const usernames = ["john_doe", "admin", "super_user"];
const newName = "admin";

console.log(usernames.includes(newName));

// -------------- 4

const runners = ["Nika", "Tornike", "Salome", "Beka", "Lela"];

const lessRunners = runners.slice(0, 3);

console.log(lessRunners)