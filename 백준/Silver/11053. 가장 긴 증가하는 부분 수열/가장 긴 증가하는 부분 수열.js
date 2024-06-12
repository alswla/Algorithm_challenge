
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(inputArguments) {
  const totalLength = Number(inputArguments.shift());
  const inputArr = inputArguments.shift().split(" ").map(Number);

  const dpArr = new Array(totalLength).fill(0);
  dpArr[0] = 1;

  for (let i = 1; i < totalLength; i += 1) {
    let max = 0;

    for (let j = 0; j < i; j += 1) {
      if (inputArr[i] > inputArr[j] && dpArr[j] > max) {
        max = dpArr[j];
      }
    }

    dpArr[i] = max + 1;
  }

  return Math.max(...dpArr);
}

console.log(solution(input));
