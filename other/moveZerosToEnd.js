// 3. Move Zeroes

// Move all zeroes to the end while keeping order.

// Example:

// [0,1,0,3,12] → [1,3,12,0,0]

const MoveZeros = (arr) => {
  const array = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      array.push(arr[i]);
    }
  }

  array.sort((a, b) => a - b);

  console.log("sorted array", array);
  let i = 0;
  while (i < array.length) {
    arr[i] = array[i];
    i++;
  }
  while (i < arr.length) {
    arr[i] = 0;
    i++;
  }

  return arr;
};

console.log(MoveZeros([0, 1, 0, 0, 3, 2, 12]));
