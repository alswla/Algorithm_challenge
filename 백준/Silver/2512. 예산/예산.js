const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const totalDepartments = Number(input[0]);
const requestedBudgets = input[1].split(" ").map((item) => Number(item));
const totalBudget = Number(input[2]);

function solution(departments, budgets, budget) {
  const sortedBudgets = budgets.sort((a, b) => a - b);

  let highest = sortedBudgets[departments - 1];
  let lowest = 1;

  while (lowest <= highest) {
    const mid = Math.floor((lowest + highest) / 2);
    const sum = sortedBudgets.reduce(
      (acc, budget) => acc + (budget <= mid ? budget : mid),
      0
    );

    if (sum <= budget) {
      lowest = mid + 1;
    } else {
      highest = mid - 1;
    }
  }

  return highest;
}

console.log(solution(totalDepartments, requestedBudgets, totalBudget));
