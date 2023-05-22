let displayData = "58369+580";

// operands = +,-,*,/
let arr = [];
let value = "";
for (let i = 0; i < displayData.length; i++) {
  if (
    displayData[i] === "+" ||
    displayData[i] === "-" ||
    displayData[i] === "×" ||
    displayData[i] === "÷"
  ) {
    if (value.length > 0) {
      arr.push(value); // 273, +, 30002, +
      value = "";
    }
    arr.push(displayData[i]);
  } else {
    value += displayData[i]; // 273
  }
}

if (value.length > 0) {
  arr.push(value);
}

console.log(arr);

let result = makeResult(arr);
console.log(result);
// /,*,+,-

// arr = [5]
function makeResult(arr) {
  // BODMAS
  let operands = ["÷", "×", "+", "-"];
  for (let i = 0; i < operands.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === operands[i]) {
        let n1 = Number(arr[j - 1]);
        let n2 = Number(arr[j + 1]);
        let res; // 4
        if (i === 0) {
          res = n1 / n2;
        } else if (i === 1) {
          res = n1 * n2;
        } else if (i === 2) {
          res = n1 + n2;
        } else {
          res = n1 - n2; // n1, operand, n2
        }
        arr.splice(j - 1, 3, res);
        j--;
      }
    }
  }
  console.log(arr);
  return arr;
}

// function makeResult(arr) {
//   let operands = ["÷", "×", "+", "-"];
//   for (let i = 0; i < operands.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] === operands[i]) {
//         let n1 = Number(arr[j - 1]);
//         let n2 = Number(arr[j + 1]);
//         let res;
//         if (i === 0) {
//           res = n1 / n2;
//         } else if (i === 1) {
//           res = n1 * n2;
//         } else if (i === 2) {
//           res = n1 + n2;
//         } else {
//           res = n1 - n2;
//         }
//         arr.splice(j - 1, 3, res);
//         j--;
//       }
//     }
//     console.log(arr);
//   }
//   return arr;
// }

// displayData =  -5+3
// arr =  [ -5, +, 3] // -2

let str = "-5+2";
console.log(str.slice(0, 2));
