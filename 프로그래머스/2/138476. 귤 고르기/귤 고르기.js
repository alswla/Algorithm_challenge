function solution(k, tangerine) {
  const tangerineObj = {};
  
  for (const size of tangerine) {
    if (tangerineObj[size]) {
      tangerineObj[size] += 1; 
    } else {
      tangerineObj[size] = 1;
    }
  }
  
  const sortedTangerine = Object.entries(tangerineObj).sort((a, b) => b[1] - a[1]);
  
  let typeCount = 0;
  let remain = k;
  
  for (const tangerine of sortedTangerine) {
    const count = tangerine[1];
    
    if (remain < count) {
      typeCount += 1;
      remain -= remain;
      tangerine[1] -= remain;
    } else {
      typeCount += 1;
      remain -= count;
    } 
    
    if (remain === 0) {
      return typeCount;
    }
  }
}
