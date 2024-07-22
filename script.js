// NOTE : Ican Use "reduce" And "Math.max" And "new Set()" And other methods

// one *********************************************************
const inputNumbersSum = [1, 2, 3, 4, 5, 6];
function sumArray(numbers) {
  let total = 0;
  for (let number of numbers) total += number;
  return total;
}
let outputNumbersSum = sumArray(inputNumbersSum);
console.log(outputNumbersSum); // 21

// two *********************************************************
const inputNumbersMax = [31, 12, 14, 33, 51, 18];

function findMax(numbers) {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}
let outputNumbersMax = findMax(inputNumbersMax);
console.log(outputNumbersMax); // 51

//three *********************************************************
const myStr = "hello im mahmod";
function reverseString(str) {
  return str.split("").reverse().join("");
}
let reverseStr = reverseString(myStr);
console.log(reverseStr); // domham mi olleh

//four *********************************************************
const inputNumbers = [1, 2, 2, 3, 33, 22, 4, 4, 5];

function removeDuplicatesNumbers(inputNumbers) {
  let cleanNumbers = [];
  for (let i = 0; i < inputNumbers.length; i++) {
    if (!cleanNumbers.includes(inputNumbers[i])) {
      cleanNumbers.push(inputNumbers[i]);
    }
  }
  return cleanNumbers;
}
let outputNumbers = removeDuplicatesNumbers(inputNumbers);
console.log(outputNumbers); // [1, 2, 3, 33, 22, 4, 5]

