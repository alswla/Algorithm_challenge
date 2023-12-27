/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
 const arr = s.split("");
  let leftChr = [];

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "[":
      case "(":
      case "{":
        leftChr.push(arr[i]);
        break;

      case ")":
        if (leftChr[leftChr.length - 1] === "(") {
          leftChr.pop();
        } else {
          return false;
        }
        break;
      case "}":
        if (leftChr[leftChr.length - 1] === "{") {
          leftChr.pop();
        } else {
          return false;
        }
        break;
      case "]":
        if (leftChr[leftChr.length - 1] === "[") {
          leftChr.pop();
        } else {
          return false;
        }
        break;
    }
  }

  return leftChr.length === 0;
};