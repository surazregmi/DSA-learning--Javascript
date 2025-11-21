// Sliding Window Algorithm Implementation in JavaScript

// This function finds the maximum sum of a subarray with a fixed size 'k'
// input array : [2, 1, 5, 1, 3, 2], k = 3;
// output : 9 (subarray [5, 1, 3])

function maxSumArray(arr, k) {
  sum = 0;
  maxSum = 0;

  for (i = 0; i < k; i++) {
    sum = sum + arr[i];
  }

  maxSum = sum;

  for (i = k; i < arr.length; i++) {
    sum = sum + arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, sum);
  }

  return maxSum;
}

console.log(maxSumArray([2, 1, 5, 1, 3, 2], 3));
