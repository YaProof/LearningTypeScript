const Sorting = require('./Sorting.js').default;
const InsertionSorting = require('./InsertionSorting.js').default;
const { sortingArray1, sortingArray2 } = require('../testData/users.js');

describe('insertion sort', () => {
  let sorting1 = new Sorting(sortingArray1(), new InsertionSorting());
  let sorting2 = new Sorting(sortingArray2(), new InsertionSorting());

  test('Sorting 1', () => {
    expect(sorting1.sort().map(s => s.id)).toEqual([1, 4, 5, 10, 15, 22, 24, 31, 35, 55]);
  });

  test('Sorting 2', () => {
    expect(sorting2.sort().map(s => s.id)).toEqual([1, 4, 10, 15, 22, 24, 35, 55, 71, 95]);
  });
});
