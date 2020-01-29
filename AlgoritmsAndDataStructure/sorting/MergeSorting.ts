import { ISorting } from "../system/ISorting";
import { IComparable } from "../system/IComparable";

export default class MergeSorting<T extends IComparable<T>> implements ISorting<T> {
  
  private merge(val: T[], l: number, r: number, mid: number): void {
    let i1: number = 0;
    let i2: number = 1;
    let result: T[] = [];

    while (l + i1 <= mid && mid + i2 <= r) {
      if (val[l + i1].compareTo(val[mid + i2]) > 0) {
        result.push(val[mid + i2]);
        i2++;
      } else {
        result.push(val[l + i1]);
        i1++;
      }
    }

    while (l + i1 <= mid) {
      result.push(val[l + i1]);
      i1++;
    }

    while (mid + i2 <= r) {
      result.push(val[mid + i2]);
      i2++;
    }

    result.forEach((item, index) => {
      val[index + l] = item;
    });
  }

  private sorting(val: T[], l: number, r: number): void {
    if (r - l >= 1) {
      let mid: number = Math.floor((l + r) / 2);
      this.sorting(val, l, mid);
      this.sorting(val, mid + 1, r);
      this.merge(val, l, r, mid);
    }
  }
  
  public sort(val: T[]): T[] {
    this.sorting(val, 0, val.length - 1);
    return val;
  }
}