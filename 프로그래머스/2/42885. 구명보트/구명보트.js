function solution(people, limit) {
  const sortedArr = people.sort((a, b) => a - b);
  let boats = 0;
  
  while (sortedArr.length > 0) {
    const lastPerson = sortedArr.pop();
    const firstPerson = sortedArr[0];
    
    if (firstPerson + lastPerson <= limit) {
      sortedArr.shift();
    }
    boats += 1;
  }
  
  return boats;
}
