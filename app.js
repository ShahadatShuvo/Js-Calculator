// Vanilla JS

let btnChange = document.getElementById("btnChange");
let body = document.getElementById("body");
let calculator = document.getElementById("calculator");
let whole = document.getElementById("whole");

let flag = 0;

whole.style.backgroundImage = "url('./img/cosmos-5809271_1920.png')";
function changeMode() {
  if (flag === 0) {
    whole.style.backgroundImage = "";
    whole.style.backgroundColor = "#0E1424";
    body.style.backgroundColor = "#0E1424";
    // calculator.style.backgroundColor = "#00B1BA";
    btnChange.innerHTML = "Light";
    flag = 1;
  } else {
    calculator.style.backgroundColor = "transparent";
    whole.style.backgroundImage = "url('./img/cosmos-5809271_1920.png')";
    btnChange.innerHTML = "Dark";
    flag = 0;
  }
}

//            1+3
//              4
//  1+5-3+4*2+4/2

let display = document.getElementById("display");
let inputs = document.getElementById("inputs");
let btnPlus = document.getElementById("btn-plus");
let btnMinus = document.getElementById("btn-minus");
let btnMulti = document.getElementById("btn-multi");
let btnDiv = document.getElementById("btn-div");
let btn0 = document.getElementById("btn0");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btnDot = document.getElementById("btn-dot");
let btnC = document.getElementById("btnC");
let equal = document.getElementById("equal");
let del = document.getElementById("del");

let displayData = "";
// 5++

function displayValue(value) {
  if (displayData.length > 14) {
    // kisoina
  } else {
    displayData += value;
    let len = displayData.length;
    if (len >= 2) {
      let l1 = displayData[len - 1];
      let l2 = displayData[len - 2];
      if (
        (l1 === "+" || l1 === "-" || l1 === "×" || l1 === "÷") &&
        (l2 === "+" || l2 === "-" || l2 === "×" || l2 === "÷")
      ) {
        displayData = displayData.slice(0, len - 2) + l1;
      }
    }
    console.log("displayData: " + displayData);
    display.innerHTML = displayData;
  }
}

function clearScreen() {
  displayData = "";
  display.innerHTML = displayData;
}

function makeResult(arr) {
  let operands = ["÷", "×", "+", "-"];
  for (let i = 0; i < operands.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === operands[i]) {
        let n1 = Number(arr[j - 1]);
        let n2 = Number(arr[j + 1]);
        let res;
        if (i === 0) {
          res = n1 / n2;
        } else if (i === 1) {
          res = n1 * n2;
        } else if (i === 2) {
          res = n1 + n2;
        } else {
          res = n1 - n2;
        }
        arr.splice(j - 1, 3, res);
        j--;
      }
    }
    console.log(arr);
  }
  return arr;
}

function calculation() {
  if (displayData.length === 0) {
    display.innerHTML = displayData;
  } else {
    let arr = [];
    let value = "";
    let temp = 0;
    // -20+5
    // -5+3 // -5
    if (displayData[0] === "-") {
      value += displayData[0];
      temp = 1;
    }

    // displayData =  "2+3-5*6/2"
    for (let i = temp; i < displayData.length; i++) {
      if (
        displayData[i] === "+" ||
        displayData[i] === "-" ||
        displayData[i] === "×" ||
        displayData[i] === "÷"
      ) {
        if (value.length > 0) {
          arr.push(value); // 580 [580]
          value = "";
        }
        arr.push(displayData[i]);
      } else {
        value += displayData[i];
      }
    }
    if (value.length) {
      arr.push(value);
      value = "";
    }
    console.log(arr);
    let result = makeResult(arr);
    inputs.innerHTML = `${displayData} =`;
    displayData = result;
    display.innerHTML = result;
  }
}

function deleteFromEnd() {
  displayData = displayData.slice(0, displayData.length - 1);
  display.innerHTML = displayData;
}

btn0.addEventListener("click", () => displayValue(0)); // method
btn1.addEventListener("click", () => displayValue(1));
btn2.addEventListener("click", () => displayValue(2));
btn3.addEventListener("click", () => displayValue(3));
btn4.addEventListener("click", () => displayValue(4));
btn5.addEventListener("click", () => displayValue(5));
btn6.addEventListener("click", () => displayValue(6));
btn7.addEventListener("click", () => displayValue(7));
btn8.addEventListener("click", () => displayValue(8));
btn9.addEventListener("click", () => displayValue(9));
btnPlus.addEventListener("click", () => displayValue("+"));
btnMinus.addEventListener("click", () => displayValue("-"));
btnMulti.addEventListener("click", () => displayValue("×"));
btnDiv.addEventListener("click", () => displayValue("÷"));
btnDot.addEventListener("click", () => displayValue("."));
btnC.addEventListener("click", clearScreen);
equal.addEventListener("click", calculation);
del.addEventListener("click", deleteFromEnd);
