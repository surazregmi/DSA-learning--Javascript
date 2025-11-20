// Sliding Window Algorithm Implementation in JavaScript

// This function finds the maximum sum of a subarray with a fixed size 'k'
// input array : [2, 1, 5, 1, 3, 2], k = 3;
// output : 9 (subarray [5, 1, 3])

function maxSumArray(array, k) {
  let sum = 0;
  let maxSum = 0;

  //first sum the first k elements which acts as a starting sum
  for (i = 0; i < k; i++) {
    sum += array[i];
  }

  //initialize the max sum to sum of first k elements
  maxSum = sum;

  //start from k which is sliding to the kth position and subtract with i-k so that next 3 elements are added in a loop.
  for (i = k; i < array.length; i++) {
    sum = sum + array[i] - array[i - k];
    maxSum = Math.max(maxSum, sum);
  }
  //max value will be stored in maxSum.

  return maxSum;
}

//test cases

console.log(maxSumArray([2, 1, 5, 1, 3, 2], 3));
