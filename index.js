// // 1
// const processArray = (array, callback) => callback(array);

// const getSum = (arr) => {
//   let sum = 0;

//   for (let num of arr) {
//     sum += num;
//   }

//   return sum;
// };

// const getMin = (arr) => {
//   let min = arr[0];

//   for (let num of arr) {
//     if (num < min) {
//       min = num;
//     }
//   }

//   return min;
// };

// const getMax = (arr) => {
//   let max = arr[0];

//    for (let num of arr) {
//      if (num > max) {
//        max = num;
//      }
//    }

//   return max;
// };

// const numbers = [1, 2, 3, 4, 5];
// console.log(processArray(numbers, getSum));

// 2

let operate = (a, b) => callback(a, b);

let add = (a, b) => a + b;
let substract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let devide = (a, b) => a / b;

console.log(operate(10, 5, add));
console.log(operate(10, 5, substract));
console.log(operate(10, 5, multiply));
console.log(operate(10, 5, devide));


// 3 







