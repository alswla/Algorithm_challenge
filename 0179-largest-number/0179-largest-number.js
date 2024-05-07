/**
 * @param {number[]} nums
 * @return {string}
 */
const largestNumber = function(nums) {
  if (nums.every((num) => num === 0)) return "0";
  
  const digit = nums.map(num => num.toString());
  const sorting = digit.sort((a, b) => {
    const orderA = a + b;
    const orderB = b + a;
    
    return orderB.localeCompare(orderA); 
  });
  
  return sorting.join("");
};
