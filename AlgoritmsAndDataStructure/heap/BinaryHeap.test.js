const BinaryHeap = require('./BinaryHeap.js').default;
const User = require('../testData/comparable.js').default;

let heap = new BinaryHeap();

describe('work heap', () => {
  heap.insert(new User(70, "Name 1", 25));

  let cnt = heap.count;
  test('First inserted', () => {
    expect(cnt).toEqual(1);
  });

  heap.insert(new User(10, "Name 2", 25));
  heap.insert(new User(30, "Name 3", 25));
  heap.insert(new User(40, "Name 4", 25));
  heap.insert(new User(2, "Name 5", 25));
  heap.insert(new User(6, "Name 6", 25));

  test('userId === 2 is min', () => {
    expect(heap.extractMin().id).toEqual(2);
  });

  test('userId === 6 is min', () => {
    expect(heap.extractMin().id).toEqual(6);
  });
});
