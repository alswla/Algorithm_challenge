function solution(numbers) {
  const stringified = numbers.map((num) => num.toString());
  const sorted = stringified.sort((a, b) => (b + a) - (a + b)).join("");
  
  return sorted[0] === "0" ? "0" : sorted;
}
