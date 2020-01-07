import { IComparable } from "./system/IComparable";

export default class BinaryHeap<T extends IComparable<T>> {
  private _arr: T[];

  private swap(a: number, b: number): void {
    let t = this._arr[a];
    this._arr[a] = this._arr[b];
    this._arr[b] = t;
  }

  private siftDown(index: number): void {
    let left: number;
    let right: number;
    let flag: boolean = true;
    let idx: number = index;
    let maxIndex: number = this._arr.length - 1;
    let minChildrenIndex: number;

    while (flag) {
      left = 2 * idx + 1;
      right = 2 * idx + 2;

      if (left > maxIndex) {
        flag = false;
      } else {
        minChildrenIndex = left;

        if (right <= maxIndex && this._arr[left].compareTo(this._arr[right]) > 0) {
          minChildrenIndex = right;
        }

        if (this._arr[idx].compareTo(this._arr[minChildrenIndex]) > 0) {
          this.swap(idx, minChildrenIndex);
          idx = minChildrenIndex;
        } else {
          flag = false;
        }
      }
    }
  };

  private siftUp(index: number): void {
    let parentIndex: number = Math.floor(index / 2);
    while (parentIndex >= 0 && this._arr[parentIndex].compareTo(this._arr[index]) > 0) {
      this.swap(parentIndex, index);
      index = parentIndex;
      parentIndex = Math.floor(parentIndex / 2);
    }
  };

  constructor(items: undefined | T[]) {
    this._arr = [];
    if (items !== undefined) {
      items.forEach(item => {
        this.insert(item);
      });
    }
  }

  get count(): number { return this._arr.length; }

  public extractMin(): T {
    let len = this._arr.length;
    if (len === 0) {
      throw Error("no elements");
    }
    
    let result = this._arr[0];
    this._arr[0] = this._arr[len - 1];
    this._arr.splice(len - 1, 1);
    this.siftDown(0);

    return result;
  };

  public insert(val: T): void {
    this._arr.push(val);
    this.siftUp(this._arr.length - 1);
  };
}
