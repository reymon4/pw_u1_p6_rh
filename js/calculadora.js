let operator = null;
let result = null;
let input = "";

const getValue = (value) => {
  const display = document.getElementById("result");
  if (value === "C") {
    reset();
    return;
  }
  if (value === "=") {
    if (input !== "" && operator !== "") {
      result = calculate(result, parseFloat(input), operator); 
      display.innerText = result;
      input = result.toString();
      console.log(input)
      console.log(result)
      operator = "";
    }
    return;
  }

  if (["+", "-", "X", "÷"].includes(value)) {
    if (input !== "") {
      if (result === null) {
        result = parseFloat(input); 
      } else {
        result = calculate(result, parseFloat(input), operator); 
      }
      operator = value;
      input = "";
      display.innerText = result + " " + operator;
    } else if (result !== null) {
      operator = value;
      display.innerText = result + " " + operator;
    }
    return;
  }
  input += value;
  display.innerText += value;
};

function deleteElement() {
  const display = document.getElementById("result");
  if (input.length > 0) {
    input = input.slice(0, -1);
    display.innerText = display.innerText.slice(0, -1);
  } else if (operator !== "") {
    operator = "";
    display.innerText = display.innerText.slice(0, -1);
  } else if (result !== null) {
    result = null;
    display.innerText = "";
  }
}

const reset = () => {
  input = ""; 
  operator = null;
  result = null;
  document.getElementById("result").innerText = "";
};

const calculate = (x, y, operator) => {
  switch (operator) {
    case "+":
      return x + y;
    case "-":
      return x - y;
    case "X":
      return x * y;
    case "÷":
      return x / y;
    default:
      return 0;
  }
};
