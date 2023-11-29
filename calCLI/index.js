import readline from "readline";

import GenericCal from "./GenericCal.js";
import EngineeringCalculator from "./EngineeringCalculator.js";
import ProgrammerCalculator from "./ProgrammerCalculator.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let calculator = {};

// mode switch
const calMode = (mode) => {
  if (mode === 1) {
    calculator = new GenericCal();
    console.log(`Current Mode: GenericCal`)
  } else if (mode === 2) {
    calculator = new EngineeringCalculator();
    console.log(`Current Mode: EngineeringCalculator`)
  } else if (mode === 3) {
    calculator = new ProgrammerCalculator();
    console.log(`Current Mode: ProgrammerCalculator`)
  }
};

calMode();

// operator switch

console.log(`
Select Calculator Mode:
1. Engineering Calculator
2. Standard Calculator
3. Programmer Calculator
`);

const run = () => {
  rl.question("Enter the mode (1/2/3): ", (input) => {
    const mode = parseInt(input);
    if ([1, 2, 3].includes(mode)) {
      // cal mode
      calMode(mode)
      // 1st num
      rl.question("Enter first number: ", (input) => {
        const num1 = parseInt(input);
        if (!isNaN(num1) && num1 !== 0) {
          // ope
          rl.question("Enter operator(+, -, *, /): ", (input) => {
            const ope = `${input}`;
            if (["+", "-", "*", "/"].includes(ope)) {
              // 2nd num
              rl.question("Enter second number: ", (input) => {
                const num2 = parseInt(input);
                // result
                if (!isNaN(num2) && num2 !== 0) {
                  console.log(`Result: ${calculator.add(num1, num2)}`);
                } else {
                  console.log("양수를 입력하세요.");
                }
              });
            } else {
              console.log("연산자를 입력하세요.");
            }
          });
        } else {
          console.log("양수를 입력하세요.");
        }
      });
    } else {
      console.log("1/2/3 중 선택하세요.");
    }
  });
};

run();
