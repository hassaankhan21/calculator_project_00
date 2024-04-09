#! /usr/bin/env node
import inquirer from "inquirer";

const input = await inquirer.prompt([
  {
    type: "number",
    name: "firstNumber",
    message: "Enter first number",
  },
  {
    type: "number",
    name: "secondNumber",
    message: "Enter second number",
  },
  {
    type: "list",
    name: "operator",
    message: "Select and operator to perform operation",
    choices: ["Addition","Subtraction","Multiplication","Division","Percentage"],
  },
]);

//coditional statements
if (input.operator === "Addition"){
    console.log(input.firstNumber + input.secondNumber);
}
else if (input.operator === "Subtraction"){
    console.log(input.firstNumber - input.secondNumber);
}
else if (input.operator === "Multiplication"){
    console.log(input.firstNumber * input.secondNumber);
}
else if (input.operator === "Division"){
    console.log(input.firstNumber / input.secondNumber);
}
else if (input.operator === "Percentage"){
    console.log(input.firstNumber % input.secondNumber);
}
