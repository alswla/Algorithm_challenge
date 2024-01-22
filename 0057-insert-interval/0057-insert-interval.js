/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
const insert = function(intervals, newInterval) {
  const result = [];

  for (let i = 0; i < intervals.length; i++) {
    let target = intervals[i];

    if (Math.max(target[0], newInterval[0]) <= Math.min(target[1], newInterval[1])) {
      newInterval = [Math.min(target[0], newInterval[0]), Math.max(target[1], newInterval[1])];
      continue;
    }


    if (target[0] > newInterval[1]) {
      result.push(newInterval, ...intervals.slice(i));
      return result;
    }

    result.push(target);
  }

  result.push(newInterval);
  
  return result;
};