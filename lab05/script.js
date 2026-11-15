// 1
let name = "gath";
let age = 21;
let isStudent = true;
let fruits = ["apple", "banana", "mango"];
let person = {
  firstName: "Gath",
  course: "BICT",
  year: 2
};

// 2
let a = 20;
let b = 6;
console.log(`${a} + ${b} =`, a + b);
console.log(`${a} - ${b} =`, a - b);
console.log(`${a} * ${b} =`, a * b);
console.log(`${a} / ${b} =`, a / b);
console.log(`${a} % ${b} =`, a % b);
console.log(`${a} ** 2 =`, a ** 2);

// 3
let eka = "Hello";
let deka = "World";
let okkoma = eka + " " + deka;
console.log(okkoma);

// 4
let score = 90;
if (score >= 50) {
  console.log("You passed!");
} else {
  console.log("You failed.");
}

// 5
for (let i = 0; i < fruits.length; i++) {
  console.log("Fruits: " + i + ":", fruits[i]);
}

// 6
function calculateRectangleArea(length, width) {
  return length * width;
}

console.log("Area :", calculateRectangleArea(8, 5));

// 7
const colorBtn = document.getElementById("colorBtn");
colorBtn.addEventListener("click", function () {
  document.body.style.backgroundColor = 'lightblue';
});
