const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const totalMeetings = Number(input.shift());
const meetingArr = input.map((item) =>
  item.split(" ").map((item) => Number(item))
);

function solution(total, meetings) {
  const sortedByEnd = meetings.sort((a, b) =>
    a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]
  );

  let count = 1;
  let prevEndTime = sortedByEnd[0][1];

  for (let index = 1; index < total; index++) {
    const [startTime, endTime] = sortedByEnd[index];

    if (startTime >= prevEndTime) {
      count += 1;
      prevEndTime = endTime;
    }
  }

  return count;
}

console.log(solution(totalMeetings, meetingArr));
