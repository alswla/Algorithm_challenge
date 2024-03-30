/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
const kClosest = function(points, k) {
  function euclideanDistance(x, y) {
    const positionA = [0, 0];
    const positionB = [x, y];
    let distance = 0;
    
    for (let i = 0; i < positionB.length; i += 1) {
      distance += Math.pow(positionA[i] - positionB[i], 2)
    }
    
    return distance;
  }
  
  const distanceArr = [];
  const answerArr = [];
  
  for (let index = 0; index < points.length; index += 1) {
    const target = points[index];
    const distance = euclideanDistance(...target);
    
    distanceArr.push({position: target, distance});
  }
  
  distanceArr.sort((a, b) => {
    return a.distance - b.distance;
  })
  
  for (let i = 0; i < k; i += 1) {
    answerArr.push(distanceArr[i].position);
  }
  
  return answerArr;
};