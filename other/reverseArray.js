// 4. Reverse an Array

// Reverse without using extra array.

// Example:

// [1,2,3,4] → [4,3,2,1]

//logic loop through middle of the array and swap first with last one.
const reverseArray = (arr) => {
  let temp;
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  console.log("reversed", arr);
  return arr;
};

console.log(reverseArray([1, 2, 3, 4]));
