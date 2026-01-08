////find secondlargest in an array.
//[10,4,7,34,44,25,12,9];
//output 34

function secondlargest(a) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < a.length; i++) {
    if (a[i] > largest) {
      secondLargest = largest;
      largest = a[i];
    } else if (a[i] > secondLargest && a[i] < largest) {
      secondLargest = a[i];
    }
  }

  return secondLargest;
}

console.log(secondlargest([10, 4, 7, 34, 44, 25, 12, 9]));

// recap secondlargest - 9th jan 2026
const secondlargest = (arr) => {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] < largest) {
      arr[i] = secondLargest;
    }
  }

  return secondLargest;
};
