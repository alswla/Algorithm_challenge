const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const totalRelations = Number(input.shift());
const [target1, target2] = input
  .shift()
  .split(" ")
  .map((item) => Number(item));
const relationCount = Number(input.shift());
const relations = input.map((item) =>
  item.split(" ").map((item) => Number(item))
);

function solution(total, start, end, relationArr) {
  const relationGraph = Array.from({ length: total + 1 }, () => []);
  const visited = Array.from({ length: total + 1 }, () => false);

  relationArr.map(([from, to]) => {
    relationGraph[from].push(to);
    relationGraph[to].push(from);
  });

  function findRelationDepthWithDfs(startRelation, endRelation) {
    const stack = [[startRelation, 0]];
    visited[startRelation] = true;

    while (stack.length > 0) {
      const [currentStart, relationDepth] = stack.pop();

      if (currentStart === endRelation) {
        return relationDepth;
      }

      for (const relation of relationGraph[currentStart]) {
        if (!visited[relation]) {
          visited[relation] = true;
          stack.push([relation, relationDepth + 1]);
        }
      }
    }

    return -1;
  }

  return findRelationDepthWithDfs(start, end);
}

console.log(solution(totalRelations, target1, target2, relations));
