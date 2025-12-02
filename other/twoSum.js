// 1. Two Sum

// Given an array and a target, return indices of two numbers that add to the target.

// Example:

// nums = [2,7,11,15], target = 9
// Output: [0,1]

const twoSum = (arr, target) => {
  const myMap = new Map();

  for (i = 0; i < arr.length; i++) {
    let diff = target - arr[i];
    if (arr[i] < target) {
      if (myMap.has(diff)) {
        return [myMap.get(diff), i];
      }

      myMap.set(arr[i], i);
    }
  }
};

console.log(twoSum([7, 11, 2, 15], 9));
