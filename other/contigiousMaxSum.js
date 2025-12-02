// 2. Maximum Subarray Sum (Kadane - Easy Version)

// Find the maximum sum of any contiguous subarray.

// Example:

// nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6  (subarray: [4,-1,2,1])

const contigiousMaxSum = (arr) => {
  let maxSum = 0;
  let currentSum = 0;

  for (i = 0; i < arr.length; i++) {
    if (currentSum < 0) currentSum = 0;

    currentSum += arr[i];

    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
};

console.log(contigiousMaxSum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
