import inquirer from "inquirer";
import Choices from "inquirer/lib/objects/choices.js";

let my_balance = 10000;
let my_pin = 8282;

let pinAnswer = await inquirer.prompt({
  name: "pin",
  message: "Enter your pin",
  type: "number",
});

if (pinAnswer.pin === my_pin) {
  console.log("Your Pin is Correct");
  let operation_Ans = await inquirer.prompt([
    {
      name: "operation",
      message: "please select option",
      type: "list",
      choices: ["withdrow", "First cash", "check balance"],
    },
  ]);

  if (operation_Ans.operation === "withdrow") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "Enter your Amount",
        type: "number",
      },
    ]);

    if (amountAns.amount <= my_balance) {
      let balance = my_balance - amountAns.amount;
      console.log(`The remaning balance is ${balance}`);
    } else {
      console.log(`You have Insufficent balance `);
    }
  }
  // if user select Fast cash ......
  else if (operation_Ans.operation === "First cash") {
    let fastCashans = await inquirer.prompt([
      {
        name: "amount",
        type: "list",
        choices: ["1000", "2000", "3000", "4000", "5000", "10000", "15000"],
      },
    ]);

    if (fastCashans.amount <= my_balance) {
      let balance2 = my_balance - fastCashans.amount;
      console.log(`The remaning balance is ${balance2}`);
    } else {
      console.log("You have Insufficent amount");
    }
  } else if (operation_Ans.operation === "check balance")
    console.log(`Your Balance is ${my_balance}/- Rupes`);
} else {
  console.log("Your pin is Incorrect");
}
