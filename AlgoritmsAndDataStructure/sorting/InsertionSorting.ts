import { ISorting } from "../system/ISorting";
import { IComparable } from "../system/IComparable";
import { swap } from "../system/utils";

export default class InsertionSorting<T extends IComparable<T>> implements ISorting<T> {
  public sort(val: T[]): T[] {
    let i: number;
    let j: number;
    let len: number = val.length;

    for (i = 1; i < len; i++) {
      j = i - 1;
      while (j >= 0 && val[j].compareTo(val[j + 1]) > 0) {
        swap(val, j, j + 1);
        j--;
      }
    }

    return val;
  }
}