export function binarySearch(arr: number[], value: number): number {
  let l: number = -1;
  let r: number = arr.length;
  let m: number;

  if (arr.length) {
    while (l < r - 1) {
      m = Math.floor((l + r) / 2);
      if (arr[m] === value) {
        return m;
      } else if (arr[m] < value) {
        l = m;
      } else {
        r = m;
      }
    }
  }

  return -1;
}
