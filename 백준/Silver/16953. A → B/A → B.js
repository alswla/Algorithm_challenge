
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const inputArr = input[0].split(" ").map((item) => Number(item));

function solution(inputArguments) {
  let [element, targetNum] = inputArguments;
  let count = 0;

  while (element !== targetNum) {
    if (targetNum < element) {
      return -1;
    }

    if (String(targetNum).endsWith("1")) {
      const convertedNumToStr = targetNum
        .toString()
        .substring(0, targetNum.toString().length - 1);
      const convertedStrToNum = Number(convertedNumToStr);

      targetNum = convertedStrToNum;
      count += 1;
    } else {
      targetNum /= 2;
      count += 1;
    }
  }

  return count + 1;
}

console.log(solution(inputArr));
