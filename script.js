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

// -------------- 5

const sentence = ["I", "love", "Python", "very", "much"];
sentence.splice(2,1,"JavaScript");
console.log(sentence)

// -------------- 6

const gelPrices = [27, 54, 13.5, 108];
const usdPrices = gelPrices.map((x) => x / 2.7);
console.log(usdPrices);

// -------------- 7

const grades = [45, 78, 92, 33, 51, 88, 49];
const passedGrades = grades.filter((x) => x >= 51);
console.log(passedGrades);

// -------------- 8

const distances = [5, 3, 8, 2, 10, 4, 6];
const distanceCounter = 0;
const distanceSum = distances.reduce((a, b) => a + b, distanceCounter);
console.log(distanceSum);

// ------------- 9

const transactions = [150, 200, -50, 400];
const foundTransactions = transactions.find((x) => x < 0);
console.log(foundTransactions);

// ------------- 10

