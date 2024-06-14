const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M] = input
  .shift()
  .split(" ")
  .map((item) => parseInt(item));

function solution(rowCount, colCount) {
  let answer = 1;
  let start = 0;
  let width = 0;

  for (let i = 0; i < rowCount; i++) {
    for (let j = 0; j < colCount; j++) {
      start = input[i][j];

      for (let k = j + 1; k < colCount; k++) {
        if (input[i][k] === start) {
          width = k - j + 1;

          if (
            i + width - 1 < rowCount &&
            start === input[i + width - 1][j] &&
            input[i + width - 1][j] === input[i + width - 1][k] &&
            width * width > answer
          ) {
            answer = width * width;
          }
        }
      }
    }
  }

  return answer;
}

console.log(solution(N, M));
