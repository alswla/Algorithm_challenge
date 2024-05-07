/**
 * @param {number[]} nums
 * @return {string}
 */
const largestNumber = function(nums) {
  const digit = nums.map(num => num.toString());
  const sorting = digit.sort((a, b) => {
    const orderA = a + b;
    const orderB = b + a;
    
    return orderB.localeCompare(orderA); 
  });
  
  if (sorting[0] == "0") return "0";
  
  return sorting.join("");
};
