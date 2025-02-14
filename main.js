// work 1
var userName = "Gia";
var lastName = "Kvaratskhelia";
let age = 27;
const hasHobbies = true;
const gender = "male";
console.log(userName, lastName, gender, age, hasHobbies);

// work 2
let x = 20;
let y = 40;
let z = 60;

console.log(x + y + z);
console.log(x - y - z);
console.log(x + y - z);
console.log((x + y) / z);
console.log(z * y);
console.log(y / (z * y));
console.log(x + y + z - x * z - x * y);

// work 3

let university = "smart academy";
let courseName = "Frontend & Seo Development";
let location = "tbilisi";
let sibling = "Lasha";

console.log(
  "Hello!, I'm " +
    userName +
    " " +
    lastName +
    " and i'm studying at " +
    university +
    " in " +
    courseName +
    " course." +
    " also, I live in " +
    location +
    " and i have one sibling called " +
    sibling +
    "."
);
console.log(
  `Hello!, I'm ${userName} ${lastName} and i'm studying at ${university} in ${courseName} course. also, i live in ${location} and i have one sibling called ${sibling}`
);

// work 4

let rectangle = {
  x: 7,
  y: 5,
};

console.log(`${rectangle.x * rectangle.y}`);
