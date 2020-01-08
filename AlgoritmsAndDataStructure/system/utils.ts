export function swap<T>(arr: T[], idxA: number, idxB: number) {
  let t: T = arr[idxA];
  arr[idxA] = arr[idxB];
  arr[idxB] = t;
}
