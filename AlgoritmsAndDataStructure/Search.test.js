const { binarySearch } = require('./Search.js');

let arr1 = [1, 2, 3, 14, 25, 36, 37, 48];
let arr2 = [1, 2, 3, 14, 25, 36, 37, 48, 69];

test('not found elements', () => {
  expect(binarySearch([], 20)).toBe(-1);
  expect(binarySearch(arr1, 20)).toBe(-1);
  expect(binarySearch(arr2, 20)).toBe(-1);
});

test('range limits', () => {
  expect(binarySearch(arr1, 1)).toBe(0);
  expect(binarySearch(arr1, 48)).toBe(7);
  expect(binarySearch(arr2, 1)).toBe(0);
  expect(binarySearch(arr2, 69)).toBe(8);
});

test('center value', () => {
  expect(binarySearch(arr1, 25)).toBe(4);
  expect(binarySearch(arr2, 36)).toBe(5);
});
